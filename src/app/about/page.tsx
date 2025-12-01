import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Moonochew',
  description: 'The story of Moonochew: 12 years of development, Australian ingenuity, and a vision for regenerative farming. Meet inventor Andrew Humphreys and discover our mission.',
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-spring-meadow texture-overlay">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
                A Better Way to Farm
              </h1>
              <p className="text-xl md:text-2xl text-living-green leading-relaxed mb-8">
                Born from frustration with wasteful tree guards, Moonochew represents 12 years
                of relentless innovation—and a fundamental rethinking of how we protect trees on working farms.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-natural-cream border border-living-green/20 rounded-xl px-6 py-4">
                  <div className="text-3xl font-serif text-golden-wattle mb-1">12+</div>
                  <div className="text-sm text-stone-grey">Years Developing</div>
                </div>
                <div className="bg-natural-cream border border-living-green/20 rounded-xl px-6 py-4">
                  <div className="text-3xl font-serif text-golden-wattle mb-1">100%</div>
                  <div className="text-sm text-stone-grey">Australian Made</div>
                </div>
                <div className="bg-natural-cream border border-living-green/20 rounded-xl px-6 py-4">
                  <div className="text-3xl font-serif text-golden-wattle mb-1">∞</div>
                  <div className="text-sm text-stone-grey">Reusability</div>
                </div>
              </div>
            </div>
            <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
              <Image
                src="/images/photos/moonochew protecting a tree 2.jpg"
                alt="Andrew Humphreys with Moonochew tree guard on farm"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl mb-8 text-center">
              The Story
            </h2>

            <div className="bg-parchment border border-living-green/30 rounded-2xl p-8 md:p-12 mb-12">
              <blockquote className="text-2xl md:text-3xl font-serif text-living-green leading-relaxed mb-6 italic">
                "I was sick of buying plastic tree guards that would crack, degrade, and end up in landfill
                after a single use. There had to be a better way—something that would last, something that
                actually made sense for the land and the animals."
              </blockquote>
              <cite className="text-lg text-stone-grey not-italic">
                — Andrew Humphreys, Founder & Inventor
              </cite>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6 text-living-green leading-relaxed">
                <p>
                  Andrew Humphreys didn't set out to revolutionize tree protection. He was simply trying
                  to solve a problem every farmer knows too well: how do you protect young trees from cattle
                  without creating more waste, more expense, and more headaches?
                </p>

                <p>
                  For over a decade, Andrew experimented, failed, learned, and tried again. He tested different
                  materials, different designs, different approaches. He studied how cattle interact with barriers,
                  how trees grow in protected microclimates, and how traditional guards fail.
                </p>

                <p>
                  The breakthrough came from aerospace engineering. Type 301 stainless spring steel—the same
                  material used in aircraft landing gear—had the exact properties needed: incredible strength,
                  natural elasticity, and rust resistance that would last generations.
                </p>

                <p>
                  But the material was only part of the solution. The real innovation was understanding that
                  a tree guard doesn't need to be discarded. With the right design and the right steel, one
                  guard could protect tree after tree, decade after decade.
                </p>

                <p className="text-xl text-charcoal font-medium">
                  Moonochew isn't just a product. It's a philosophy: build things that last, design with
                  nature in mind, and never settle for waste when permanence is possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-spring-meadow">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Mission & Values
            </h2>
            <p className="text-lg text-living-green">
              Everything we do is guided by three core principles that shape how we design,
              manufacture, and support our products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Regeneration */}
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-living-green/10 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-living-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-living-green">Regeneration</h3>
              <p className="text-stone-grey leading-relaxed">
                We believe farming can heal the land, not harm it. Every Moonochew guard is designed
                to support regenerative practices—protecting trees that rebuild soil, sequester carbon,
                and create habitat while maintaining productive grazing systems.
              </p>
            </div>

            {/* Circularity */}
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-golden-wattle">Circularity</h3>
              <p className="text-stone-grey leading-relaxed">
                Linear consumption is broken. We design for infinite reusability—guards that move from
                tree to tree for generations, eliminating waste streams entirely. When they finally reach
                end of life, stainless steel is 100% recyclable into new materials.
              </p>
            </div>

            {/* Partnership */}
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                <svg className="w-10 h-10 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-golden-wattle">Partnership</h3>
              <p className="text-stone-grey leading-relaxed">
                Farmers aren't customers—they're partners in land regeneration. We listen, learn,
                and adapt based on real-world feedback. Your success is our success, and we're committed
                to supporting you long after the sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Australian Made */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-parchment rounded-2xl overflow-hidden border border-living-green/20">
              <Image
                src="/images/photos/moonochew units flat before assembly.jpg"
                alt="Moonochew manufacturing in Australia"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-golden-wattle/10 border border-golden-wattle/30 rounded-full px-6 py-2 mb-6">
                <span className="text-golden-wattle font-semibold">100% Australian Made</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                Built Here, For Here
              </h2>
              <div className="space-y-4 text-living-green leading-relaxed">
                <p>
                  Every Moonochew guard is manufactured in Australia, using Australian steel,
                  by Australian workers. This isn't just about patriotism—it's about quality,
                  accountability, and supporting local industry.
                </p>
                <p>
                  We know Australian conditions because we work in them. We understand the harsh
                  sun, the unpredictable weather, and the unique challenges of farming this land.
                  Our guards are tested in real Australian paddocks, refined based on real Australian feedback.
                </p>
                <p>
                  When you choose Moonochew, you're supporting Australian innovation, Australian
                  manufacturing, and Australian jobs—while getting a product specifically designed
                  for the conditions you face every day.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-serif text-golden-wattle mb-2">Australian Steel</div>
                  <p className="text-sm text-stone-grey">Sourced & processed locally</p>
                </div>
                <div>
                  <div className="text-3xl font-serif text-golden-wattle mb-2">Local Workforce</div>
                  <p className="text-sm text-stone-grey">Made by skilled Australian workers</p>
                </div>
                <div>
                  <div className="text-3xl font-serif text-golden-wattle mb-2">Field Tested</div>
                  <p className="text-sm text-stone-grey">Proven in Australian conditions</p>
                </div>
                <div>
                  <div className="text-3xl font-serif text-golden-wattle mb-2">Direct Support</div>
                  <p className="text-sm text-stone-grey">Real people, real answers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="section-padding bg-gradient-to-br from-parchment via-natural-cream to-spring-meadow">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <svg className="w-16 h-16 text-golden-wattle/30 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-living-green leading-relaxed mb-8 italic text-balance">
              We envision a future where every farm is a sanctuary—where productivity and regeneration
              aren't at odds, where cattle and trees coexist, and where the tools we use honor the land
              instead of exploiting it.
            </blockquote>
            <div className="h-1 w-24 bg-golden-wattle mx-auto mb-6"></div>
            <p className="text-xl text-stone-grey">
              That future starts with a single tree guard. It starts with you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest-canopy text-natural-cream">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-golden-wattle">
            Be part of a growing community of farmers choosing regeneration over degradation,
            permanence over waste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="px-10 py-5 bg-spring-meadow text-deep-forest font-semibold rounded-xl hover:bg-natural-cream transition-colors duration-200 shadow-lg text-lg"
            >
              Order Moonochew
            </Link>
            <Link
              href="/how-it-works"
              className="px-10 py-5 border-2 border-natural-cream text-natural-cream font-semibold rounded-xl hover:bg-natural-cream/10 transition-colors duration-200 text-lg"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
