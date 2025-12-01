import Image from 'next/image'
import OrderForm from '@/components/forms/OrderForm'
import { getPageContent, OrderPageContent } from '@/lib/content'

export default function OrderPage() {
  const content = getPageContent<OrderPageContent>('order')

  return (
    <main className="min-h-screen bg-spring-meadow pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-natural-cream to-spring-meadow">
        <div className="container-width text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
            {content.hero.headline} <span className="text-golden-wattle">{content.hero.headlineHighlight}</span>
          </h1>
          <p className="text-xl text-stone-grey max-w-2xl mx-auto">
            {content.hero.subheadline}
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
                  src={content.product.mainImage}
                  alt={content.product.mainImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-3 gap-4">
                {content.product.galleryImages.map((img, index) => (
                  <div key={index} className="aspect-square bg-parchment rounded-xl overflow-hidden border border-living-green/20 relative">
                    <Image
                      src={img.image}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif text-charcoal mb-2">{content.product.name}</h2>
                <p className="text-stone-grey">
                  {content.product.tagline}
                </p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-bold text-golden-wattle">${content.product.price}</span>
                <span className="text-stone-grey">{content.product.currency} {content.product.priceNote}</span>
              </div>

              {/* What's Included */}
              <div className="bg-parchment p-6 rounded-2xl border border-living-green/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">What's Included:</h3>
                <ul className="space-y-3">
                  {content.product.included.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-stone-grey">
                      <svg className="w-5 h-5 text-living-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div className="bg-parchment p-6 rounded-2xl border border-living-green/20">
                <h3 className="text-xl font-semibold text-charcoal mb-4">Specifications:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {content.product.specifications.map((spec, index) => (
                    <div key={index} className="bg-natural-cream rounded-xl p-3">
                      <div className="text-stone-grey uppercase tracking-wider text-xs mb-1">{spec.label}</div>
                      <div className="text-charcoal font-medium">{spec.value}</div>
                    </div>
                  ))}
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
              <h2 className="text-2xl font-serif text-charcoal mb-2">{content.orderForm.headline}</h2>
              <p className="text-stone-grey mb-8">
                {content.orderForm.subheadline}
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
            {content.bulkOrders.headline} <span className="text-golden-wattle">{content.bulkOrders.headlineHighlight}</span>?
          </h2>
          <p className="text-stone-grey mb-8 max-w-2xl mx-auto">
            {content.bulkOrders.subheadline}
          </p>
          <a
            href={content.bulkOrders.ctaLink}
            className="inline-block px-8 py-4 border-2 border-living-green/50 text-golden-wattle font-semibold rounded-xl hover:bg-living-green/10 hover:border-living-green transition-all"
          >
            {content.bulkOrders.ctaText}
          </a>
        </div>
      </section>

      {/* Why Choose Moonochew */}
      <section className="py-16 bg-spring-meadow">
        <div className="container-width">
          <h2 className="text-3xl font-serif text-charcoal mb-12 text-center">
            {content.benefits.headline} <span className="text-golden-wattle">{content.benefits.headlineHighlight}</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.items.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-golden-wattle/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-charcoal mb-2">{benefit.title}</h3>
                <p className="text-stone-grey">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
