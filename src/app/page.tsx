import Image from 'next/image'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <div className="bg-spring-meadow text-charcoal">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-spring-meadow via-new-growth/50 to-spring-meadow" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-living-green/10 border border-living-green/30 rounded-full">
                <div className="w-2 h-2 bg-living-green rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-forest-canopy">Australian Innovation</span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-deep-forest">
                Protecting Trees.
                <br />
                <span className="text-living-green">Regenerating Farms.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-charcoal/80 max-w-xl">
                The world's only cattle-resistant tree guard. Made from barbed stainless spring steel, designed to last forever.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/order" size="lg" variant="primary">
                  Order Now — $250
                </Button>
                <Button href="/how-it-works" size="lg" variant="secondary">
                  Learn How It Works
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-living-green/20">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-living-green font-serif">12+</div>
                  <div className="text-sm text-stone-grey mt-1">Years Tested</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-living-green font-serif">∞</div>
                  <div className="text-sm text-stone-grey mt-1">Reusable</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-living-green font-serif">10</div>
                  <div className="text-sm text-stone-grey mt-1">Min Setup</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-green-lg">
              <Image
                src="/images/photos/moonochew protecting a tree.jpg"
                alt="Moonochew tree guard protecting a young tree on Australian farmland"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-natural-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-deep-forest">
              The Problem with <span className="text-clay-earth">Segregated Agriculture</span>
            </h2>
            <p className="text-lg text-stone-grey">
              Traditional farming methods create unnecessary barriers between livestock and environmental regeneration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Problem Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-natural border border-parchment text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-alert-rust/10 border border-alert-rust/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-alert-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 text-clay-earth">Fire &amp; Competition</h3>
              <p className="text-stone-grey">
                Pasture grasses compete with young trees for water and nutrients, while increasing fire risk around vulnerable saplings.
              </p>
            </div>

            {/* Problem Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-natural border border-parchment text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-alert-rust/10 border border-alert-rust/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-alert-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 text-clay-earth">Lost Land</h3>
              <p className="text-stone-grey">
                Farmers must fence off entire areas for tree establishment, removing productive land from grazing rotation for years.
              </p>
            </div>

            {/* Problem Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-natural border border-parchment text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-alert-rust/10 border border-alert-rust/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-alert-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 text-clay-earth">Expensive Guesswork</h3>
              <p className="text-stone-grey">
                Traditional tree guards are fragile, disposable, and often fail—wasting money and trees without guaranteed protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-new-growth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solution Image */}
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-green-lg">
              <Image
                src="/images/photos/close up of moonochew.jpg"
                alt="Close-up of Moonochew barbed stainless spring steel tree guard"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Solution Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-forest">
                The <span className="text-living-green">Moonochew Solution</span>
              </h2>

              <p className="text-lg text-charcoal/80">
                A revolutionary approach to tree protection that allows cattle and trees to coexist from day one.
              </p>

              <div className="space-y-4">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-living-green/20 border border-living-green flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-living-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-forest mb-1">Cattle-Resistant Design</h4>
                    <p className="text-charcoal/70">Barbed stainless spring steel deters rubbing and browsing without harming animals.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-living-green/20 border border-living-green flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-living-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-forest mb-1">No Fencing Required</h4>
                    <p className="text-charcoal/70">Plant trees anywhere in your paddock without removing land from production.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-living-green/20 border border-living-green flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-living-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-forest mb-1">Built to Last Forever</h4>
                    <p className="text-charcoal/70">Infinitely reusable stainless steel construction means one-time investment for generations of trees.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-living-green/20 border border-living-green flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-living-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-forest mb-1">10-Minute Installation</h4>
                    <p className="text-charcoal/70">Simple setup with no tools required. Just press into ground around your sapling.</p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-living-green/20 border border-living-green flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-living-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-forest mb-1">Australian Made</h4>
                    <p className="text-charcoal/70">Designed, tested, and manufactured in Australia for Australian conditions.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/how-it-works" size="lg" variant="primary">
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/Stats Section */}
      <section className="py-16 md:py-24 bg-forest-canopy text-natural-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
              Transform Your <span className="text-golden-wattle">Farm</span>
            </h2>
            <p className="text-lg text-natural-cream/70">
              Join Australian farmers who are seeing real results from integrating trees into their grazing systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Stat 1 */}
            <div className="bg-forest-canopy-dark/50 p-6 rounded-2xl border border-natural-cream/10 text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-wattle font-serif mb-2">2x</div>
              <div className="text-xl font-semibold text-natural-cream mb-2">Productivity</div>
              <p className="text-sm text-natural-cream/70">
                Silvopasture systems can double land productivity by combining timber, livestock, and biodiversity.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-forest-canopy-dark/50 p-6 rounded-2xl border border-natural-cream/10 text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-wattle font-serif mb-2">50%</div>
              <div className="text-xl font-semibold text-natural-cream mb-2">Water Reduction</div>
              <p className="text-sm text-natural-cream/70">
                Tree shade reduces pasture evaporation, cutting water needs in half while improving soil moisture.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-forest-canopy-dark/50 p-6 rounded-2xl border border-natural-cream/10 text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-wattle font-serif mb-2">30%</div>
              <div className="text-xl font-semibold text-natural-cream mb-2">More Milk</div>
              <p className="text-sm text-natural-cream/70">
                Shaded dairy cows produce up to 30% more milk thanks to reduced heat stress and improved comfort.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-forest-canopy-dark/50 p-6 rounded-2xl border border-natural-cream/10 text-center">
              <div className="text-4xl md:text-5xl font-bold text-golden-wattle font-serif mb-2">100+</div>
              <div className="text-xl font-semibold text-natural-cream mb-2">Years Life</div>
              <p className="text-sm text-natural-cream/70">
                Native trees become legacy assets, providing shade, timber, and habitat for multiple generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-spring-meadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-green border border-new-growth relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-golden-wattle/20 border border-golden-wattle/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-golden-wattle" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <blockquote className="mt-4">
              <p className="text-xl md:text-2xl text-charcoal/90 font-serif italic mb-6">
                "We've been using Moonochew guards for over a decade. They've transformed how we approach regenerative farming. We can now plant trees throughout our paddocks without losing grazing land. The guards have proven themselves through droughts, floods, and everything in between—and they still look brand new."
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 bg-living-green/20 rounded-full border border-living-green/30 flex items-center justify-center">
                  <span className="text-living-green font-bold text-lg">DS</span>
                </div>
                <div>
                  <div className="font-semibold text-deep-forest">David Scarabelotti</div>
                  <div className="text-sm text-stone-grey">Regenerative Farmer, Victoria</div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-living-green via-forest-canopy to-living-green text-natural-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4">
            Ready to <span className="text-golden-wattle">Regenerate?</span>
          </h2>
          <p className="text-lg md:text-xl text-natural-cream/80 mb-8 max-w-2xl mx-auto">
            Start protecting trees and building resilience on your farm today. Each Moonochew guard is an investment in your land's future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/order" className="px-8 py-4 bg-golden-wattle text-charcoal font-semibold rounded-xl hover:bg-golden-wattle-light transition-colors shadow-gold">
              Order Moonochew Guards — $250
            </a>
            <a href="/contact" className="px-8 py-4 border-2 border-natural-cream/50 text-natural-cream font-semibold rounded-xl hover:bg-natural-cream/10 transition-colors">
              Get in Touch
            </a>
          </div>
          <p className="mt-8 text-sm text-natural-cream/60">
            Australian made • Lifetime durability • 12+ years proven in the field
          </p>
        </div>
      </section>
    </div>
  )
}
