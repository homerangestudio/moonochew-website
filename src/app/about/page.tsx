import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getPageContent, AboutPageContent } from '@/lib/content'

const content = getPageContent<AboutPageContent>('about')

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
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
                {content.hero.headline}
              </h1>
              <p className="text-xl md:text-2xl text-living-green leading-relaxed mb-8">
                {content.hero.subheadline}
              </p>
              <div className="flex flex-wrap gap-4">
                {content.hero.stats.map((stat, index) => (
                  <div key={index} className="bg-natural-cream border border-living-green/20 rounded-xl px-6 py-4">
                    <div className="text-3xl font-serif text-golden-wattle mb-1">{stat.value}</div>
                    <div className="text-sm text-stone-grey">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-natural-cream rounded-2xl overflow-hidden border border-living-green/20">
              <Image
                src={content.hero.image}
                alt={content.hero.imageAlt}
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
              {content.story.headline}
            </h2>

            <div className="bg-parchment border border-living-green/30 rounded-2xl p-8 md:p-12 mb-12">
              <blockquote className="text-2xl md:text-3xl font-serif text-living-green leading-relaxed mb-6 italic">
                "{content.story.quote.text}"
              </blockquote>
              <cite className="text-lg text-stone-grey not-italic">
                — {content.story.quote.author}
              </cite>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="space-y-6 text-living-green leading-relaxed">
                {content.story.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <p className="text-xl text-charcoal font-medium">
                  {content.story.philosophy}
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
              {content.values.headline}
            </h2>
            <p className="text-lg text-living-green">
              {content.values.subheadline}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {content.values.items.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-living-green/10 rounded-2xl flex items-center justify-center">
                  <svg className="w-10 h-10 text-living-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />}
                    {index === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {index === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />}
                  </svg>
                </div>
                <h3 className="text-2xl mb-4 text-living-green">{value.title}</h3>
                <p className="text-stone-grey leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Australian Made */}
      <section className="section-padding bg-natural-cream">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-parchment rounded-2xl overflow-hidden border border-living-green/20">
              <Image
                src={content.australianMade.image}
                alt={content.australianMade.imageAlt}
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="inline-block bg-golden-wattle/10 border border-golden-wattle/30 rounded-full px-6 py-2 mb-6">
                <span className="text-golden-wattle font-semibold">{content.australianMade.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl mb-6">
                {content.australianMade.headline}
              </h2>
              <div className="space-y-4 text-living-green leading-relaxed">
                {content.australianMade.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {content.australianMade.features.map((feature, index) => (
                  <div key={index}>
                    <div className="text-3xl font-serif text-golden-wattle mb-2">{feature.title}</div>
                    <p className="text-sm text-stone-grey">{feature.description}</p>
                  </div>
                ))}
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
              {content.vision.quote}
            </blockquote>
            <div className="h-1 w-24 bg-golden-wattle mx-auto mb-6"></div>
            <p className="text-xl text-stone-grey">
              {content.vision.tagline}
            </p>
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
