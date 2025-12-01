'use client'

import { useTina, tinaField } from 'tinacms/dist/react'
import Image from 'next/image'
import Link from 'next/link'
import type { HowItWorksQuery, HowItWorksQueryVariables } from '../../../tina/__generated__/types'

interface HowItWorksPageClientProps {
  data: HowItWorksQuery
  variables: HowItWorksQueryVariables
  query: string
}

export default function HowItWorksPageClient(props: HowItWorksPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const content = data.howItWorks

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-spring-meadow texture-overlay">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl mb-6 text-balance"
              data-tina-field={tinaField(content?.hero, 'headline')}
            >
              {content?.hero?.headline}
            </h1>
            <p
              className="text-xl md:text-2xl text-living-green leading-relaxed"
              data-tina-field={tinaField(content?.hero, 'subheadline')}
            >
              {content?.hero?.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className="text-4xl md:text-5xl mb-6"
              data-tina-field={tinaField(content?.installation, 'headline')}
            >
              {content?.installation?.headline}
            </h2>
            <p
              className="text-lg text-living-green"
              data-tina-field={tinaField(content?.installation, 'subheadline')}
            >
              {content?.installation?.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {content?.installation?.steps?.map((step, index) => (
              <div
                key={index}
                className="card text-center"
                data-tina-field={tinaField(step)}
              >
                <div className="w-20 h-20 mx-auto mb-6 bg-golden-wattle/10 rounded-2xl flex items-center justify-center">
                  <span className="text-5xl font-serif text-golden-wattle">{step?.number}</span>
                </div>
                <h3 className="text-2xl mb-4">{step?.title}</h3>
                <p className="text-living-green leading-relaxed mb-6">
                  {step?.description}
                </p>
                <div className="aspect-video bg-parchment rounded-xl overflow-hidden">
                  {step?.image && (
                    <Image
                      src={step.image}
                      alt={step?.imageAlt || ''}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  )}
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
            <h2
              className="text-4xl md:text-5xl mb-6"
              data-tina-field={tinaField(content?.features, 'headline')}
            >
              {content?.features?.headline}
            </h2>
            <p
              className="text-lg text-living-green"
              data-tina-field={tinaField(content?.features, 'subheadline')}
            >
              {content?.features?.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {content?.features?.items?.map((feature, index) => (
              <div
                key={index}
                className="space-y-6"
                data-tina-field={tinaField(feature)}
              >
                <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
                  {feature?.image && (
                    <Image
                      src={feature.image}
                      alt={feature?.imageAlt || ''}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-golden-wattle">{feature?.title}</h3>
                  <p className="text-living-green leading-relaxed mb-4">
                    {feature?.description}
                  </p>
                  <ul className="space-y-2 text-stone-grey">
                    {feature?.points?.map((point, pointIndex) => (
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
            <h2
              className="text-4xl md:text-5xl mb-6"
              data-tina-field={tinaField(content?.synergy, 'headline')}
            >
              {content?.synergy?.headline}
            </h2>
            <p
              className="text-lg text-living-green"
              data-tina-field={tinaField(content?.synergy, 'subheadline')}
            >
              {content?.synergy?.subheadline}
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div
              className="bg-parchment border border-living-green/30 rounded-2xl p-8"
              data-tina-field={tinaField(content?.synergy, 'quote')}
            >
              <p className="text-xl text-living-green leading-relaxed italic">
                "{content?.synergy?.quote?.text}"
              </p>
              <p className="mt-4 text-stone-grey">
                — {content?.synergy?.quote?.author}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-forest-canopy text-natural-cream">
        <div className="container-width text-center">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 font-serif"
            data-tina-field={tinaField(content?.cta, 'headline')}
          >
            {content?.cta?.headline}
          </h2>
          <p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-golden-wattle"
            data-tina-field={tinaField(content?.cta, 'subheadline')}
          >
            {content?.cta?.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={content?.cta?.primaryCtaLink || '#'}
              className="px-10 py-5 bg-spring-meadow text-deep-forest font-semibold rounded-xl hover:bg-natural-cream transition-colors duration-200 shadow-lg text-lg"
            >
              <span data-tina-field={tinaField(content?.cta, 'primaryCtaText')}>
                {content?.cta?.primaryCtaText}
              </span>
            </Link>
            <Link
              href={content?.cta?.secondaryCtaLink || '#'}
              className="px-10 py-5 border-2 border-natural-cream text-natural-cream font-semibold rounded-xl hover:bg-natural-cream/10 transition-colors duration-200 text-lg"
            >
              <span data-tina-field={tinaField(content?.cta, 'secondaryCtaText')}>
                {content?.cta?.secondaryCtaText}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
