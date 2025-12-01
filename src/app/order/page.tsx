import Image from 'next/image'
import OrderForm from '@/components/forms/OrderForm'

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-spring-meadow pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-natural-cream to-spring-meadow">
        <div className="container-width text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
            Order <span className="text-golden-wattle">Moonochew</span>
          </h1>
          <p className="text-xl text-stone-grey max-w-2xl mx-auto">
            Generations of fresh food. Priceless protection. One investment.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-natural-cream">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-6">
              {/* Main Product Image */}
              <div className="aspect-square bg-parchment rounded-2xl overflow-hidden border border-living-green/20 relative">
                <Image
                  src="/images/photos/close up of moonochew.jpg"
                  alt="Moonochew tree guard - barbed stainless spring steel construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                <div className="aspect-square bg-parchment rounded-xl overflow-hidden border border-living-green/20 relative">
                  <Image
                    src="/images/photos/moonochew protecting a tree.jpg"
                    alt="Moonochew installed protecting a young tree"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="aspect-square bg-parchment rounded-xl overflow-hidden border border-living-green/20 relative">
                  <Image
                    src="/images/photos/moonochew units flat before assembly.jpg"
                    alt="Moonochew units flat before assembly"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="aspect-square bg-parchment rounded-xl overflow-hidden border border-living-green/20 relative">
                  <Image
                    src="/images/photos/moonochew protecting a tree 4.jpg"
                    alt="Moonochew protecting tree in paddock"
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-charcoal mb-2">Moonochew Sapling Protector</h2>
                <p className="text-stone-grey">
                  World's only cattle-resistant, barbed stainless spring steel tree guard
                </p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-golden-wattle">$250</span>
                <span className="text-stone-grey">AUD + shipping</span>
              </div>

              {/* What's Included */}
              <div className="bg-parchment p-6 rounded-2xl border border-living-green/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-stone-grey">
                    <svg className="w-5 h-5 text-living-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    One Moonochew tree guard (pre-folded)
                  </li>
                  <li className="flex items-center gap-3 text-stone-grey">
                    <svg className="w-5 h-5 text-living-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Ground pegs for anchoring
                  </li>
                  <li className="flex items-center gap-3 text-stone-grey">
                    <svg className="w-5 h-5 text-living-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Installation guide
                  </li>
                  <li className="flex items-center gap-3 text-stone-grey">
                    <svg className="w-5 h-5 text-living-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lifetime repair support
                  </li>
                </ul>
              </div>

              {/* Specifications */}
              <div className="bg-parchment p-6 rounded-2xl border border-living-green/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Specifications:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-natural-cream rounded-xl p-3">
                    <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">Material</div>
                    <div className="text-charcoal font-medium">Stainless Spring Steel</div>
                  </div>
                  <div className="bg-natural-cream rounded-xl p-3">
                    <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">Setup Time</div>
                    <div className="text-charcoal font-medium">10 minutes</div>
                  </div>
                  <div className="bg-natural-cream rounded-xl p-3">
                    <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">Tools Required</div>
                    <div className="text-charcoal font-medium">None</div>
                  </div>
                  <div className="bg-natural-cream rounded-xl p-3">
                    <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">Reusability</div>
                    <div className="text-charcoal font-medium">Unlimited</div>
                  </div>
                  <div className="bg-natural-cream rounded-xl p-3">
                    <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">Weather Resistance</div>
                    <div className="text-charcoal font-medium">All conditions</div>
                  </div>
                  <div className="bg-natural-cream rounded-xl p-3">
                    <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">Origin</div>
                    <div className="text-charcoal font-medium">Australian Made</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-16 bg-spring-meadow">
        <div className="container-width">
          <div className="max-w-2xl mx-auto">
            <div className="bg-natural-cream p-8 rounded-2xl border border-living-green/20">
              <h2 className="text-2xl font-serif text-charcoal mb-2">Place Your Order</h2>
              <p className="text-stone-grey mb-8">
                Fill out the form below and we'll contact you to confirm your order and arrange shipping.
              </p>
              <OrderForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16 bg-natural-cream">
        <div className="container-width text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-4">
            Planning a <span className="text-golden-wattle">Large Project</span>?
          </h2>
          <p className="text-stone-grey mb-8 max-w-2xl mx-auto">
            For bulk orders, rental arrangements, or fee-for-service models, get in touch.
            Moonochew's durability makes it ideal for sharing economy models and large-scale
            regeneration projects.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 border-2 border-living-green/50 text-golden-wattle font-semibold rounded-xl hover:bg-living-green/10 hover:border-living-green transition-all"
          >
            Discuss Bulk Pricing
          </a>
        </div>
      </section>

      {/* Why Choose Moonochew */}
      <section className="py-16 bg-spring-meadow">
        <div className="container-width">
          <h2 className="text-3xl font-serif text-charcoal mb-12 text-center">
            Why Choose <span className="text-golden-wattle">Moonochew</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-golden-wattle/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Cattle-Proof</h3>
              <p className="text-stone-grey">
                The only tree guard livestock consistently leave well alone. 12+ years of testing with various breeds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-living-green/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-living-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">Infinitely Reusable</h3>
              <p className="text-stone-grey">
                Stainless spring steel lasts for generations. Protect hundreds of trees with a single guard.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-golden-wattle/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-2">10-Minute Setup</h3>
              <p className="text-stone-grey">
                No tools required. Pre-folded design simply wraps around tree and pegs into ground.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
