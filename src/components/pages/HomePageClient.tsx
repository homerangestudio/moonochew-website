'use client'

import { useTina, tinaField } from 'tinacms/dist/react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import type { HomeQuery, HomeQueryVariables } from '../../../tina/__generated__/types'

// Icon component for problem cards
function ProblemIcon({ icon }: { icon: string }) {
  const icons: Record<string, JSX.Element> = {
    fire: (
      <svg className="w-8 h-8 text-alert-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    map: (
      <svg className="w-8 h-8 text-alert-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    money: (
      <svg className="w-8 h-8 text-alert-rust" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
  return icons[icon] || icons.fire
}

interface HomePageClientProps {
  data: HomeQuery
  variables: HomeQueryVariables
  query: string
}

export default function HomePageClient(props: HomePageClientProps) {
  // useTina hook enables live editing in the TinaCMS sidebar
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const content = data.home

  return (
    <div className="bg-spring-meadow text-charcoal pt-32">
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
                <span
                  className="text-sm font-semibold text-forest-canopy"
                  data-tina-field={tinaField(content?.hero, 'badge')}
                >
                  {content?.hero?.badge}
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-deep-forest">
                <span data-tina-field={tinaField(content?.hero, 'headline')}>
                  {content?.hero?.headline}
                </span>
                <br />
                <span
                  className="text-living-green"
                  data-tina-field={tinaField(content?.hero, 'headlineHighlight')}
                >
                  {content?.hero?.headlineHighlight}
                </span>
              </h1>

              {/* Subheadline */}
              <p
                className="text-lg md:text-xl text-charcoal/80 max-w-xl"
                data-tina-field={tinaField(content?.hero, 'subheadline')}
              >
                {content?.hero?.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={content?.hero?.primaryCtaLink || '#'} size="lg" variant="primary">
                  <span data-tina-field={tinaField(content?.hero, 'primaryCtaText')}>
                    {content?.hero?.primaryCtaText}
                  </span>
                </Button>
                <Button href={content?.hero?.secondaryCtaLink || '#'} size="lg" variant="secondary">
                  <span data-tina-field={tinaField(content?.hero, 'secondaryCtaText')}>
                    {content?.hero?.secondaryCtaText}
                  </span>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-living-green/20">
                {content?.hero?.stats?.map((stat, index) => (
                  <div key={index} data-tina-field={tinaField(stat)}>
                    <div className="text-2xl md:text-3xl font-bold text-living-green font-serif">{stat?.value}</div>
                    <div className="text-sm text-stone-grey mt-1">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-green-lg">
              {content?.hero?.image && (
                <Image
                  src={content.hero.image}
                  alt={content?.hero?.imageAlt || ''}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-tina-field={tinaField(content?.hero, 'image')}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-natural-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-4 text-deep-forest">
              <span data-tina-field={tinaField(content?.problem, 'headline')}>
                {content?.problem?.headline}
              </span>{' '}
              <span
                className="text-clay-earth"
                data-tina-field={tinaField(content?.problem, 'headlineHighlight')}
              >
                {content?.problem?.headlineHighlight}
              </span>
            </h2>
            <p
              className="text-lg text-stone-grey"
              data-tina-field={tinaField(content?.problem, 'subheadline')}
            >
              {content?.problem?.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {content?.problem?.cards?.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-natural border border-parchment text-center"
                data-tina-field={tinaField(card)}
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-alert-rust/10 border border-alert-rust/30 flex items-center justify-center">
                  <ProblemIcon icon={card?.icon || 'fire'} />
                </div>
                <h3 className="font-serif text-xl md:text-2xl mb-3 text-clay-earth">{card?.title}</h3>
                <p className="text-stone-grey">{card?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-new-growth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Solution Image */}
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-green-lg">
              {content?.solution?.image && (
                <Image
                  src={content.solution.image}
                  alt={content?.solution?.imageAlt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-tina-field={tinaField(content?.solution, 'image')}
                />
              )}
            </div>

            {/* Solution Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-deep-forest">
                <span data-tina-field={tinaField(content?.solution, 'headline')}>
                  {content?.solution?.headline}
                </span>{' '}
                <span
                  className="text-living-green"
                  data-tina-field={tinaField(content?.solution, 'headlineHighlight')}
                >
                  {content?.solution?.headlineHighlight}
                </span>
              </h2>

              <p
                className="text-lg text-charcoal/80"
                data-tina-field={tinaField(content?.solution, 'subheadline')}
              >
                {content?.solution?.subheadline}
              </p>

              <div className="space-y-4">
                {content?.solution?.features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                    data-tina-field={tinaField(feature)}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-living-green/20 border border-living-green flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-living-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-forest mb-1">{feature?.title}</h4>
                      <p className="text-charcoal/70">{feature?.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href={content?.solution?.ctaLink || '#'} size="lg" variant="primary">
                  <span data-tina-field={tinaField(content?.solution, 'ctaText')}>
                    {content?.solution?.ctaText}
                  </span>
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
              <span data-tina-field={tinaField(content?.benefits, 'headline')}>
                {content?.benefits?.headline}
              </span>{' '}
              <span
                className="text-golden-wattle"
                data-tina-field={tinaField(content?.benefits, 'headlineHighlight')}
              >
                {content?.benefits?.headlineHighlight}
              </span>
            </h2>
            <p
              className="text-lg text-natural-cream/70"
              data-tina-field={tinaField(content?.benefits, 'subheadline')}
            >
              {content?.benefits?.subheadline}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {content?.benefits?.stats?.map((stat, index) => (
              <div
                key={index}
                className="bg-forest-canopy-dark/50 p-6 rounded-2xl border border-natural-cream/10 text-center"
                data-tina-field={tinaField(stat)}
              >
                <div className="text-4xl md:text-5xl font-bold text-golden-wattle font-serif mb-2">{stat?.value}</div>
                <div className="text-xl font-semibold text-natural-cream mb-2">{stat?.label}</div>
                <p className="text-sm text-natural-cream/70">{stat?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 md:py-24 bg-spring-meadow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-white p-8 md:p-12 rounded-2xl shadow-green border border-new-growth relative"
            data-tina-field={tinaField(content, 'testimonial')}
          >
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-golden-wattle/20 border border-golden-wattle/30 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-golden-wattle" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            <blockquote className="mt-4">
              <p className="text-xl md:text-2xl text-charcoal/90 font-serif italic mb-6">
                "{content?.testimonial?.quote}"
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 bg-living-green/20 rounded-full border border-living-green/30 flex items-center justify-center">
                  <span className="text-living-green font-bold text-lg">
                    {content?.testimonial?.author?.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-deep-forest">{content?.testimonial?.author}</div>
                  <div className="text-sm text-stone-grey">{content?.testimonial?.role}</div>
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
            <span data-tina-field={tinaField(content?.cta, 'headline')}>
              {content?.cta?.headline}
            </span>{' '}
            <span
              className="text-golden-wattle"
              data-tina-field={tinaField(content?.cta, 'headlineHighlight')}
            >
              {content?.cta?.headlineHighlight}
            </span>
          </h2>
          <p
            className="text-lg md:text-xl text-natural-cream/80 mb-8 max-w-2xl mx-auto"
            data-tina-field={tinaField(content?.cta, 'subheadline')}
          >
            {content?.cta?.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={content?.cta?.primaryCtaLink || '#'}
              className="px-8 py-4 bg-golden-wattle text-charcoal font-semibold rounded-xl hover:bg-golden-wattle-light transition-colors shadow-gold"
            >
              <span data-tina-field={tinaField(content?.cta, 'primaryCtaText')}>
                {content?.cta?.primaryCtaText}
              </span>
            </a>
            <a
              href={content?.cta?.secondaryCtaLink || '#'}
              className="px-8 py-4 border-2 border-natural-cream/50 text-natural-cream font-semibold rounded-xl hover:bg-natural-cream/10 transition-colors"
            >
              <span data-tina-field={tinaField(content?.cta, 'secondaryCtaText')}>
                {content?.cta?.secondaryCtaText}
              </span>
            </a>
          </div>
          <p
            className="mt-8 text-sm text-natural-cream/60"
            data-tina-field={tinaField(content?.cta, 'tagline')}
          >
            {content?.cta?.tagline}
          </p>
        </div>
      </section>
    </div>
  )
}
