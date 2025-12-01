import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageContent, HowItWorksPageContent } from '@/lib/content'

const content = getPageContent<HowItWorksPageContent>('how-it-works')

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
}

export default function HowItWorks() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-spring-meadow texture-overlay">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-balance">
              {content.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-living-green leading-relaxed">
              {content.hero.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              {content.installation.headline}
            </h2>
            <p className="text-lg text-living-green">
              {content.installation.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {content.installation.steps.map((step, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl font-serif text-golden-wattle">{step.number}</span>
                </div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="text-living-green leading-relaxed mb-6">
                  {step.description}
                </p>
                <div className="aspect-video bg-parchment rounded-xl overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.imageAlt}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="section-padding bg-spring-meadow">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              {content.features.headline}
            </h2>
            <p className="text-lg text-living-green">
              {content.features.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {content.features.items.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-golden-wattle">{feature.title}</h3>
                  <p className="text-living-green leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-stone-grey">
                    {feature.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-golden-wattle mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Synergy System */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6">
              {content.synergy.headline}
            </h2>
            <p className="text-lg text-living-green">
              {content.synergy.subheadline}
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
                "{content.synergy.quote.text}"
              </p>
              <p className="mt-4 text-stone-grey">
                — {content.synergy.quote.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest-canopy text-natural-cream">
        <div className="container-width text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif">
            {content.cta.headline}
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-golden-wattle">
            {content.cta.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content.cta.primaryCtaLink}
              className="px-10 py-5 bg-spring-meadow text-deep-forest font-semibold rounded-xl hover:bg-natural-cream transition-colors duration-200 shadow-lg text-lg"
            >
              {content.cta.primaryCtaText}
            </Link>
            <Link
              href={content.cta.secondaryCtaLink}
              className="px-10 py-5 border-2 border-natural-cream text-natural-cream font-semibold rounded-xl hover:bg-natural-cream/10 transition-colors duration-200 text-lg"
            >
              {content.cta.secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
