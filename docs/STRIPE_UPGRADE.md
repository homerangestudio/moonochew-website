# Stripe Payment Integration Guide

This guide provides step-by-step instructions for upgrading the Moonochew website from email-based orders to Stripe payment processing.

## Prerequisites

Before starting, you'll need:
- [ ] A Stripe account (sign up at [stripe.com](https://stripe.com))
- [ ] An Australian business entity (ABN)
- [ ] Bank account details for payouts
- [ ] Access to the website codebase and Cloudflare dashboard

---

## Step 1: Create Stripe Account and Product

### 1.1 Sign Up for Stripe
1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Create an account with your business email
3. Complete business verification (requires ABN)
4. Set up your bank account for payouts

### 1.2 Create Product in Stripe Dashboard
1. Navigate to **Products** in the Stripe dashboard
2. Click **Add Product**
3. Fill in:
   - **Name:** Moonochew Sapling Protector
   - **Description:** The world's only cattle-resistant, barbed stainless spring steel tree guard
   - **Image:** Upload product photo
   - **Price:** $250.00 AUD (one-time)
4. Save and note the **Price ID** (starts with `price_`)

### 1.3 Get API Keys
1. Go to **Developers > API Keys**
2. Copy both keys:
   - **Publishable key:** `pk_live_...` (for frontend)
   - **Secret key:** `sk_live_...` (for backend - keep secure!)

---

## Step 2: Install Stripe Package

Add Stripe to the project:

```bash
cd moonochew-website
pnpm add stripe @stripe/stripe-js
```

---

## Step 3: Create Checkout Cloudflare Worker

Create a new file `/functions/api/checkout.ts`:

```typescript
import Stripe from 'stripe'

interface Env {
  STRIPE_SECRET_KEY: string
  SITE_URL: string
}

interface CheckoutRequest {
  quantity: number
  customerEmail: string
  customerName: string
  shippingAddress: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    })

    const data: CheckoutRequest = await request.json()

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_YOUR_PRICE_ID', // Replace with your Price ID
          quantity: data.quantity,
        },
      ],
      mode: 'payment',
      customer_email: data.customerEmail,
      shipping_address_collection: {
        allowed_countries: ['AU'], // Australia only
      },
      metadata: {
        customerName: data.customerName,
        quantity: data.quantity.toString(),
      },
      success_url: `${env.SITE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${env.SITE_URL}/order?canceled=true`,
    })

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Checkout error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to create checkout session' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
}
```

---

## Step 4: Update OrderForm Component

Modify `/src/components/forms/OrderForm.tsx` to support Stripe:

```typescript
'use client'

import { useState } from 'react'

interface OrderFormProps {
  price?: number
  paymentEnabled?: boolean // NEW: Toggle payment mode
  priceId?: string // NEW: Stripe Price ID
}

export default function OrderForm({
  price = 250,
  paymentEnabled = false,
  priceId,
}: OrderFormProps) {
  const [quantity, setQuantity] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shippingAddress: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (paymentEnabled) {
        // Stripe Checkout flow
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            quantity,
            customerEmail: formData.email,
            customerName: formData.name,
            shippingAddress: formData.shippingAddress,
          }),
        })

        const { url, error } = await response.json()

        if (error) throw new Error(error)

        // Redirect to Stripe Checkout
        window.location.href = url
      } else {
        // Email-based order (current behavior)
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'order',
            ...formData,
            quantity,
          }),
        })

        if (!response.ok) throw new Error('Failed to submit order')

        setStatus('success')
      }
    } catch (error) {
      console.error('Order error:', error)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... rest of form JSX
}
```

---

## Step 5: Create Success Page

Create `/src/app/order/success/page.tsx`:

```typescript
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function OrderSuccess() {
  return (
    <div className="min-h-screen pt-24 bg-eucalyptus-night">
      <div className="container-width section-padding text-center">
        <div className="max-w-2xl mx-auto">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gum-leaf/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-gum-leaf" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-6">
            Order <span className="text-ochre">Confirmed!</span>
          </h1>

          <p className="text-xl text-sandstone mb-8">
            Thank you for your order. We&apos;ve sent a confirmation email with your order details.
          </p>

          <div className="card mb-8">
            <h2 className="text-xl font-semibold text-cream mb-4">What Happens Next?</h2>
            <ol className="text-left text-sandstone space-y-3">
              <li className="flex gap-3">
                <span className="text-ochre font-bold">1.</span>
                We&apos;ll prepare your Moonochew guard(s) for shipping
              </li>
              <li className="flex gap-3">
                <span className="text-ochre font-bold">2.</span>
                You&apos;ll receive a shipping notification with tracking
              </li>
              <li className="flex gap-3">
                <span className="text-ochre font-bold">3.</span>
                Your order will arrive within 5-10 business days
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Return Home
            </Button>
            <Button href="/how-it-works" variant="secondary">
              Learn Installation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## Step 6: Create Webhook Handler (Optional but Recommended)

Create `/functions/api/webhook.ts` for order fulfillment:

```typescript
import Stripe from 'stripe'

interface Env {
  STRIPE_SECRET_KEY: string
  STRIPE_WEBHOOK_SECRET: string
  RESEND_API_KEY: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context
  const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })

  const signature = request.headers.get('stripe-signature')
  if (!signature) {
    return new Response('No signature', { status: 400 })
  }

  try {
    const body = await request.text()
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      env.STRIPE_WEBHOOK_SECRET
    )

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session

      // Send confirmation email to business owner
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Moonochew Orders <orders@moonochew.com>',
          to: ['info@moonochew.com'],
          subject: `Payment Received: Order from ${session.customer_email}`,
          html: `
            <h1>Payment Received!</h1>
            <p><strong>Customer:</strong> ${session.metadata?.customerName}</p>
            <p><strong>Email:</strong> ${session.customer_email}</p>
            <p><strong>Quantity:</strong> ${session.metadata?.quantity}</p>
            <p><strong>Amount:</strong> $${(session.amount_total! / 100).toFixed(2)} AUD</p>
            <p><strong>Stripe Payment ID:</strong> ${session.payment_intent}</p>
          `,
        }),
      })
    }

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return new Response('Webhook error', { status: 400 })
  }
}
```

---

## Step 7: Add Environment Variables

Add to Cloudflare Pages dashboard (**Settings > Environment Variables**):

```
STRIPE_SECRET_KEY=sk_live_your_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_publishable_key
SITE_URL=https://moonochew.com
```

---

## Step 8: Configure Stripe Webhook

1. Go to Stripe Dashboard > **Developers > Webhooks**
2. Click **Add endpoint**
3. Enter URL: `https://moonochew.com/api/webhook`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copy the **Signing secret** to your environment variables

---

## Step 9: Enable Payment Mode

Update the Order page to enable payments:

```typescript
// In /src/app/order/page.tsx
<OrderForm
  price={250}
  paymentEnabled={true}
  priceId="price_YOUR_PRICE_ID"
/>
```

---

## Step 10: Testing

### Test Mode
1. Use Stripe test keys (`pk_test_...`, `sk_test_...`)
2. Use test card: `4242 4242 4242 4242`
3. Any future expiry date and any 3-digit CVC

### Go Live Checklist
- [ ] Switch to live API keys
- [ ] Update webhook endpoint to use live signing secret
- [ ] Test a real $1 transaction and refund
- [ ] Verify email notifications work
- [ ] Check payout settings in Stripe

---

## Shipping Considerations

For shipping costs, you have options:

### Option A: Flat Rate (Simplest)
Add shipping as a separate line item in checkout:
```typescript
line_items: [
  { price: 'price_PRODUCT_ID', quantity: data.quantity },
  { price: 'price_SHIPPING_ID', quantity: 1 },
]
```

### Option B: Stripe Shipping Rates
Configure shipping zones in Stripe Dashboard > **Products > Shipping rates**

### Option C: Manual Calculation
Calculate shipping server-side based on address and add to total

---

## Support

- **Stripe Documentation:** [stripe.com/docs](https://stripe.com/docs)
- **Cloudflare Pages Functions:** [developers.cloudflare.com/pages/functions](https://developers.cloudflare.com/pages/functions)
- **Resend API:** [resend.com/docs](https://resend.com/docs)

---

*Last updated: December 2024*
