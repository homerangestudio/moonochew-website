/**
 * Cloudflare Pages Function - Contact Form Handler
 *
 * This function handles form submissions from both the Contact and Order forms.
 * It sends emails via the Resend API and validates Turnstile tokens for spam protection.
 *
 * Environment Variables Required:
 * - RESEND_API_KEY: Your Resend API key
 * - TURNSTILE_SECRET_KEY: Your Cloudflare Turnstile secret key (optional)
 */

interface ContactFormData {
  formType: 'contact' | 'order'
  turnstileToken?: string
  name?: string
  firstName?: string
  lastName?: string
  email: string
  phone?: string
  subject?: string
  message?: string
  quantity?: number
  totalPrice?: number
  shippingAddress?: string
  notes?: string
}

interface Env {
  RESEND_API_KEY: string
  TURNSTILE_SECRET_KEY?: string
}

interface TurnstileResponse {
  success: boolean
  'error-codes'?: string[]
}

// Escape HTML to prevent XSS in email content
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .replace(/\n/g, '<br>')
}

async function verifyTurnstileToken(token: string, secretKey: string, ip: string): Promise<boolean> {
  const formData = new URLSearchParams()
  formData.append('secret', secretKey)
  formData.append('response', token)
  formData.append('remoteip', ip)

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData.toString(),
  })

  const result: TurnstileResponse = await response.json()
  return result.success
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const data: ContactFormData = await request.json()

    // Basic validation
    if (!data.email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email is required' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Verify Turnstile token if secret key is configured
    if (env.TURNSTILE_SECRET_KEY) {
      if (!data.turnstileToken) {
        return new Response(
          JSON.stringify({ success: false, error: 'Security verification required' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        )
      }

      const ip = request.headers.get('CF-Connecting-IP') || ''
      const isValidToken = await verifyTurnstileToken(data.turnstileToken, env.TURNSTILE_SECRET_KEY, ip)

      if (!isValidToken) {
        return new Response(
          JSON.stringify({ success: false, error: 'Security verification failed. Please try again.' }),
          {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          }
        )
      }
    }

    // Determine email content based on form type
    const isOrder = data.formType === 'order'
    const fullName = data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim()

    const subject = isOrder
      ? `New Order: ${data.quantity}x Moonochew from ${fullName}`
      : `Contact Form: ${data.subject || 'General Inquiry'} from ${fullName}`

    const emailHtml = isOrder
      ? generateOrderEmail(data, fullName)
      : generateContactEmail(data, fullName)

    // Send email via Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Moonochew Website <onboarding@resend.dev>',
        to: ['hello@moonochew.com.au'],
        reply_to: data.email,
        subject: subject,
        html: emailHtml,
      }),
    })

    if (!resendResponse.ok) {
      const error = await resendResponse.text()
      console.error('Resend API error:', error)
      return new Response(
        JSON.stringify({ success: false, error: 'Failed to send email' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return new Response(
      JSON.stringify({ success: false, error: 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
}

function generateOrderEmail(data: ContactFormData, fullName: string): string {
  const total = data.totalPrice || (data.quantity || 1) * 250

  // Escape all user input to prevent XSS
  const safeName = escapeHtml(fullName)
  const safeEmail = escapeHtml(data.email)
  const safePhone = escapeHtml(data.phone || 'Not provided')
  const safeAddress = escapeHtml(data.shippingAddress || 'Not provided')
  const safeNotes = data.notes ? escapeHtml(data.notes) : ''

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #3d4f44; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1a472a; color: #f5f0e6; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #d4e4d4; }
        .order-details { background: #f5f0e6; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #c4d4c4; }
        .label { font-weight: bold; color: #2d5a3d; }
        .total { font-size: 24px; color: #d4a835; font-weight: bold; }
        .footer { text-align: center; padding: 20px; color: #706b63; font-size: 12px; background: #1a472a; }
        .footer p { color: #f5f0e6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Moonochew Order</h1>
        </div>
        <div class="content">
          <div class="order-details">
            <p><span class="label">Customer:</span> ${safeName}</p>
            <p><span class="label">Email:</span> ${safeEmail}</p>
            <p><span class="label">Phone:</span> ${safePhone}</p>
          </div>

          <div class="order-details">
            <p><span class="label">Quantity:</span> ${data.quantity} unit(s)</p>
            <p><span class="label">Unit Price:</span> $250 AUD</p>
            <p class="total">Total: $${total} AUD + shipping</p>
          </div>

          <div class="order-details">
            <p><span class="label">Shipping Address:</span></p>
            <p>${safeAddress}</p>
          </div>

          ${safeNotes ? `
          <div class="order-details">
            <p><span class="label">Notes:</span></p>
            <p>${safeNotes}</p>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>This order was submitted via moonochew.com.au</p>
          <p>Reply to this email to contact the customer directly.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateContactEmail(data: ContactFormData, fullName: string): string {
  // Escape all user input to prevent XSS
  const safeName = escapeHtml(fullName)
  const safeEmail = escapeHtml(data.email)
  const safePhone = escapeHtml(data.phone || 'Not provided')
  const safeSubject = escapeHtml(data.subject || 'General Inquiry')
  const safeMessage = escapeHtml(data.message || 'No message provided')

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #3d4f44; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2d5a3d; color: #f5f0e6; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #d4e4d4; }
        .details { background: #f5f0e6; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #c4d4c4; }
        .label { font-weight: bold; color: #2d5a3d; }
        .message { background: #f5f0e6; padding: 15px; border-radius: 8px; border-left: 4px solid #d4a835; }
        .footer { text-align: center; padding: 20px; font-size: 12px; background: #1a472a; }
        .footer p { color: #f5f0e6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Message</h1>
        </div>
        <div class="content">
          <div class="details">
            <p><span class="label">From:</span> ${safeName}</p>
            <p><span class="label">Email:</span> ${safeEmail}</p>
            <p><span class="label">Phone:</span> ${safePhone}</p>
            <p><span class="label">Subject:</span> ${safeSubject}</p>
          </div>

          <div class="message">
            <p><span class="label">Message:</span></p>
            <p>${safeMessage}</p>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent via the contact form on moonochew.com.au</p>
          <p>Reply to this email to respond directly.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
