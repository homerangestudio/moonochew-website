import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works - Moonochew',
  description: 'Discover the revolutionary system behind Moonochew tree guards. From installation to infinite reusability, learn how our cattle-resistant design protects trees while regenerating farms.',
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-spring-meadow texture-overlay">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
              How Moonochew Works
            </h1>
            <p className="text-xl md:text-2xl text-living-green leading-relaxed">
              A revolutionary system that transforms how we protect trees on working farms.
              Simple to install, impossible to destroy, designed to work with nature—not against it.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Installation in Three Simple Steps
            </h2>
            <p className="text-lg text-living-green">
              From delivery to protection in under 10 minutes. No tools required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-serif text-golden-wattle">1</span>
              </div>
              <h3 className="text-2xl mb-4">Choose Your Location</h3>
              <p className="text-living-green leading-relaxed mb-6">
                Select where you want your tree to grow. Moonochew works on any terrain,
                in any paddock, protecting saplings where they're needed most.
              </p>
              <div className="aspect-video bg-parchment rounded-xl overflow-hidden">
                <Image
                  src="/images/photos/Moonochew tree guards along a driveway.jpg"
                  alt="Choosing tree location in paddock"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-serif text-golden-wattle">2</span>
              </div>
              <h3 className="text-2xl mb-4">Plant & Protect</h3>
              <p className="text-living-green leading-relaxed mb-6">
                Plant your sapling, then wrap the Moonochew guard around it.
                The spring steel naturally holds its shape—no stakes, no ties, no fuss.
              </p>
              <div className="aspect-video bg-parchment rounded-xl overflow-hidden">
                <Image
                  src="/images/photos/moonochew units flat before assembly.jpg"
                  alt="Installing Moonochew tree guard"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="card text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-serif text-golden-wattle">3</span>
              </div>
              <h3 className="text-2xl mb-4">Let Cattle Do the Work</h3>
              <p className="text-living-green leading-relaxed mb-6">
                Your cattle become tree protectors. They graze around the guard,
                naturally enriching the soil while the barbed steel keeps them from damaging the sapling.
              </p>
              <div className="aspect-video bg-parchment rounded-xl overflow-hidden">
                <Image
                  src="/images/photos/cattle under a mature shade tree showing that cattle like trees.jpg"
                  alt="Cattle grazing around protected tree"
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="section-padding bg-spring-meadow">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              Engineering Meets Nature
            </h2>
            <p className="text-lg text-living-green">
              Every detail of Moonochew is designed for durability, sustainability, and harmony with the land.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Material Science */}
            <div className="space-y-6">
              <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
                <Image
                  src="/images/photos/close up of moonochew.jpg"
                  alt="Stainless spring steel detail"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-golden-wattle">Stainless Spring Steel</h3>
                <p className="text-living-green leading-relaxed mb-4">
                  Type 301 stainless spring steel—the same material used in aircraft landing gear.
                  This isn't ordinary steel.
                </p>
                <ul className="space-y-2 text-stone-grey">
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Withstands extreme force without permanent deformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Naturally rust-resistant for decades of use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Memory properties return it to original shape</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Strategic barbing deters without harming</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Habitat Integration */}
            <div className="space-y-6">
              <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
                <Image
                  src="/images/photos/moonochew protecting a tree 3.jpg"
                  alt="Wildlife around Moonochew guard"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-golden-wattle">Habitat Integration</h3>
                <p className="text-living-green leading-relaxed mb-4">
                  Unlike plastic guards that trap and kill wildlife, Moonochew becomes part of the ecosystem.
                </p>
                <ul className="space-y-2 text-stone-grey">
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Open structure allows airflow and light penetration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Small animals and insects move freely through</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>No microplastic pollution in soil or waterways</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Supports biodiversity while protecting trees</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Infinite Reusability */}
            <div className="space-y-6">
              <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
                <Image
                  src="/images/photos/25 moonochew units in the bottom of a trailer.jpg"
                  alt="Moonochew guard being reused"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl mb-3 text-golden-wattle">Infinite Reusability</h3>
                <p className="text-living-green leading-relaxed mb-4">
                  When your tree outgrows the guard (typically 5-7 years), simply unwrap and move it to a new sapling.
                </p>
                <ul className="space-y-2 text-stone-grey">
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>Designed for multi-generational use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>No degradation, no disposal, no replacement costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>100% recyclable at eventual end of life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-golden-wattle mr-2">•</span>
                    <span>One guard can protect dozens of trees over time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Synergy System */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              The Synergy System
            </h2>
            <p className="text-lg text-living-green">
              Moonochew doesn't just protect trees—it creates a regenerative cycle where every element supports the others.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Trees */}
            <div className="card">
              <div className="w-16 h-16 mb-6 bg-living-green/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-living-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-living-green">Trees</h3>
              <p className="text-stone-grey leading-relaxed mb-4">
                Protected saplings grow into mature trees, providing:
              </p>
              <ul className="space-y-2 text-stone-grey">
                <li>• Shade for cattle in summer heat</li>
                <li>• Wind breaks across paddocks</li>
                <li>• Carbon sequestration</li>
                <li>• Improved soil structure</li>
                <li>• Wildlife habitat corridors</li>
              </ul>
            </div>

            {/* Cattle */}
            <div className="card">
              <div className="w-16 h-16 mb-6 bg-golden-wattle/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-golden-wattle">Cattle</h3>
              <p className="text-stone-grey leading-relaxed mb-4">
                Your herd continues grazing while contributing to the system:
              </p>
              <ul className="space-y-2 text-stone-grey">
                <li>• Natural fertilization around guards</li>
                <li>• Weed suppression through grazing</li>
                <li>• Soil aeration from hoof action</li>
                <li>• Access to shade as trees mature</li>
                <li>• Maintained productivity</li>
              </ul>
            </div>

            {/* Herbs */}
            <div className="card">
              <div className="w-16 h-16 mb-6 bg-golden-wattle/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-golden-wattle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-golden-wattle">Herbs</h3>
              <p className="text-stone-grey leading-relaxed mb-4">
                Native and beneficial plants thrive in the protected microclimate:
              </p>
              <ul className="space-y-2 text-stone-grey">
                <li>• Medicinal herbs for cattle health</li>
                <li>• Nitrogen-fixing ground covers</li>
                <li>• Pollinator-attracting species</li>
                <li>• Soil biology enhancement</li>
                <li>• Diversity in pasture systems</li>
              </ul>
            </div>

            {/* Wildlife */}
            <div className="card">
              <div className="w-16 h-16 mb-6 bg-natural-cream/20 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-2xl mb-4 text-charcoal">Wildlife</h3>
              <p className="text-stone-grey leading-relaxed mb-4">
                As trees establish, native animals return and thrive:
              </p>
              <ul className="space-y-2 text-stone-grey">
                <li>• Birds nesting in protected branches</li>
                <li>• Insects supporting pollination</li>
                <li>• Small mammals using tree corridors</li>
                <li>• Predators controlling pests naturally</li>
                <li>• Restored ecosystem balance</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="bg-parchment border border-living-green/30 rounded-2xl p-8">
              <p className="text-xl text-living-green leading-relaxed italic">
                "The genius of Moonochew isn't just the steel—it's how it transforms a single act of
                tree planting into a cascading system of regeneration. Protect one tree, and you've
                created habitat. Protect a hundred, and you've changed the farm forever."
              </p>
              <p className="mt-4 text-stone-grey">
                — Andrew Humphreys, Inventor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest-canopy text-natural-cream">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-golden-wattle">
            Join the farmers who are protecting trees, regenerating land, and building a sustainable future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="px-10 py-5 bg-spring-meadow text-deep-forest font-semibold rounded-xl hover:bg-natural-cream transition-colors duration-200 shadow-lg text-lg"
            >
              Order Moonochew
            </Link>
            <Link
              href="/about"
              className="px-10 py-5 border-2 border-natural-cream text-natural-cream font-semibold rounded-xl hover:bg-natural-cream/10 transition-colors duration-200 text-lg"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
