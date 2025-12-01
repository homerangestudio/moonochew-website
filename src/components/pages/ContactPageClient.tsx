'use client'

import { useTina, tinaField } from 'tinacms/dist/react'
import ContactForm from '@/components/forms/ContactForm'
import type { ContactQuery, ContactQueryVariables } from '../../../tina/__generated__/types'

interface ContactPageClientProps {
  data: ContactQuery
  variables: ContactQueryVariables
  query: string
  turnstileSiteKey?: string | null
}

export default function ContactPageClient({ turnstileSiteKey, ...props }: ContactPageClientProps) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })

  const content = data.contact

  return (
    <main className="min-h-screen bg-spring-meadow pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-natural-cream to-spring-meadow py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-charcoal mb-6"
            data-tina-field={tinaField(content?.hero, 'headline')}
          >
            {content?.hero?.headline}
          </h1>
          <p
            className="text-xl text-stone-grey max-w-2xl mx-auto"
            data-tina-field={tinaField(content?.hero, 'subheadline')}
          >
            {content?.hero?.subheadline}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl font-bold text-charcoal mb-6"
                  data-tina-field={tinaField(content?.contact, 'headline')}
                >
                  {content?.contact?.headline}
                </h2>
                <p
                  className="text-stone-grey text-lg mb-8"
                  data-tina-field={tinaField(content?.contact, 'subheadline')}
                >
                  {content?.contact?.subheadline}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div
                  className="flex items-start gap-4"
                  data-tina-field={tinaField(content?.contact?.details, 'location')}
                >
                  <div className="bg-natural-cream p-3 rounded-lg border border-parchment">
                    <svg
                      className="w-6 h-6 text-golden-wattle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-charcoal font-semibold mb-1">Location</h3>
                    <p className="text-stone-grey">
                      {content?.contact?.details?.location?.city}<br />
                      {content?.contact?.details?.location?.country}
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4"
                  data-tina-field={tinaField(content?.contact?.details, 'email')}
                >
                  <div className="bg-natural-cream p-3 rounded-lg border border-parchment">
                    <svg
                      className="w-6 h-6 text-golden-wattle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-charcoal font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${content?.contact?.details?.email}`}
                      className="text-stone-grey hover:text-golden-wattle transition-colors"
                    >
                      {content?.contact?.details?.email}
                    </a>
                  </div>
                </div>

                <div
                  className="flex items-start gap-4"
                  data-tina-field={tinaField(content?.contact?.details, 'responseTime')}
                >
                  <div className="bg-natural-cream p-3 rounded-lg border border-parchment">
                    <svg
                      className="w-6 h-6 text-golden-wattle"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-charcoal font-semibold mb-1">Response Time</h3>
                    <p className="text-stone-grey">
                      {content?.contact?.details?.responseTime?.typical}<br />
                      {content?.contact?.details?.responseTime?.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-natural-cream p-6 rounded-lg border border-parchment">
                <h3 className="text-charcoal font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  {content?.contact?.quickLinks?.map((link, index) => (
                    <a
                      key={index}
                      href={link?.link || '#'}
                      className="flex items-center gap-2 text-stone-grey hover:text-golden-wattle transition-colors"
                      data-tina-field={tinaField(link)}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {link?.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-natural-cream p-8 rounded-lg border border-parchment">
              <h2
                className="text-2xl font-bold text-charcoal mb-6"
                data-tina-field={tinaField(content?.form, 'headline')}
              >
                {content?.form?.headline}
              </h2>
              <ContactForm turnstileSiteKey={turnstileSiteKey} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-natural-cream border-y border-parchment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center"
              data-tina-field={tinaField(content?.faqs, 'headline')}
            >
              {content?.faqs?.headline}
            </h2>
            <div className="space-y-6">
              {content?.faqs?.items?.map((faq, index) => (
                <div
                  key={index}
                  className="bg-spring-meadow p-6 rounded-lg border border-parchment"
                  data-tina-field={tinaField(faq)}
                >
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {faq?.question}
                  </h3>
                  <p className="text-stone-grey">
                    {faq?.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Help */}
            <div className="mt-12 text-center">
              <p
                className="text-stone-grey mb-4"
                data-tina-field={tinaField(content?.faqs, 'ctaText')}
              >
                {content?.faqs?.ctaText}
              </p>
              <a
                href={content?.faqs?.ctaEmail || '#'}
                className="inline-block bg-golden-wattle text-deep-forest px-8 py-4 rounded-lg font-bold text-lg hover:bg-living-green hover:text-natural-cream transition-colors"
              >
                <span data-tina-field={tinaField(content?.faqs, 'ctaButtonText')}>
                  {content?.faqs?.ctaButtonText}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
