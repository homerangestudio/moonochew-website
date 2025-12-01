/**
 * Cloudflare Pages Function - Contact Form Handler
 *
 * This function handles form submissions from both the Contact and Order forms.
 * It sends emails via the Resend API.
 *
 * Environment Variables Required:
 * - RESEND_API_KEY: Your Resend API key
 */

interface ContactFormData {
  formType: 'contact' | 'order'
  name?: string
  firstName?: string
  lastName?: string
  email: string
  phone?: string
  subject?: string
  message?: string
  quantity?: number
  shippingAddress?: string
  notes?: string
}

interface Env {
  RESEND_API_KEY: string
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

    // Rate limiting could be added here via Cloudflare KV

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
        from: 'Moonochew Website <orders@moonochew.com>',
        to: ['info@moonochew.com'],
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
  const total = (data.quantity || 1) * 250

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #c8923a; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f5f2eb; }
        .order-details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .label { font-weight: bold; color: #706b63; }
        .total { font-size: 24px; color: #c8923a; font-weight: bold; }
        .footer { text-align: center; padding: 20px; color: #706b63; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Moonochew Order</h1>
        </div>
        <div class="content">
          <div class="order-details">
            <p><span class="label">Customer:</span> ${fullName}</p>
            <p><span class="label">Email:</span> ${data.email}</p>
            <p><span class="label">Phone:</span> ${data.phone || 'Not provided'}</p>
          </div>

          <div class="order-details">
            <p><span class="label">Quantity:</span> ${data.quantity} unit(s)</p>
            <p><span class="label">Unit Price:</span> $250 AUD</p>
            <p class="total">Total: $${total} AUD + shipping</p>
          </div>

          <div class="order-details">
            <p><span class="label">Shipping Address:</span></p>
            <p>${data.shippingAddress || 'Not provided'}</p>
          </div>

          ${data.notes ? `
          <div class="order-details">
            <p><span class="label">Notes:</span></p>
            <p>${data.notes}</p>
          </div>
          ` : ''}
        </div>
        <div class="footer">
          <p>This order was submitted via moonochew.com</p>
          <p>Reply to this email to contact the customer directly.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateContactEmail(data: ContactFormData, fullName: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #7d9a78; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f5f2eb; }
        .details { background: white; padding: 15px; border-radius: 8px; margin: 15px 0; }
        .label { font-weight: bold; color: #706b63; }
        .message { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #c8923a; }
        .footer { text-align: center; padding: 20px; color: #706b63; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Message</h1>
        </div>
        <div class="content">
          <div class="details">
            <p><span class="label">From:</span> ${fullName}</p>
            <p><span class="label">Email:</span> ${data.email}</p>
            <p><span class="label">Phone:</span> ${data.phone || 'Not provided'}</p>
            <p><span class="label">Subject:</span> ${data.subject || 'General Inquiry'}</p>
          </div>

          <div class="message">
            <p><span class="label">Message:</span></p>
            <p>${data.message || 'No message provided'}</p>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent via the contact form on moonochew.com</p>
          <p>Reply to this email to respond directly.</p>
        </div>
      </div>
    </body>
    </html>
  `
}
