import ContactForm from '@/components/forms/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-spring-meadow">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-natural-cream to-spring-meadow py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-stone-grey max-w-2xl mx-auto">
            Have a question or want to learn more? We'd love to hear from you.
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
                <h2 className="text-3xl font-bold text-charcoal mb-6">
                  Let's Connect
                </h2>
                <p className="text-stone-grey text-lg mb-8">
                  Whether you have questions about our products, need help with an order,
                  or want to discuss a partnership opportunity, we're here to help.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
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
                      Melbourne, Victoria<br />
                      Australia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
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
                      href="mailto:hello@moonochew.com.au"
                      className="text-stone-grey hover:text-golden-wattle transition-colors"
                    >
                      hello@moonochew.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
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
                      We typically respond within 24 hours<br />
                      Monday - Friday, 9am - 5pm AEST
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-natural-cream p-6 rounded-lg border border-parchment">
                <h3 className="text-charcoal font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href="/order"
                    className="flex items-center gap-2 text-stone-grey hover:text-golden-wattle transition-colors"
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
                    Order Moonochew
                  </a>
                  <a
                    href="/about"
                    className="flex items-center gap-2 text-stone-grey hover:text-golden-wattle transition-colors"
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
                    About Us
                  </a>
                  <a
                    href="/how-it-works"
                    className="flex items-center gap-2 text-stone-grey hover:text-golden-wattle transition-colors"
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
                    How It Works
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-natural-cream p-8 rounded-lg border border-parchment">
              <h2 className="text-2xl font-bold text-charcoal mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-natural-cream border-y border-parchment">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {/* FAQ 1 */}
              <div className="bg-spring-meadow p-6 rounded-lg border border-parchment">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  What is Moonochew made from?
                </h3>
                <p className="text-stone-grey">
                  Moonochew tree guards are made from Type 301 stainless spring steel—the same
                  material used in aircraft landing gear. This provides incredible strength, natural
                  rust resistance, and the elasticity to return to its original shape after impact.
                  The strategic barbing deters cattle without harming them.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-spring-meadow p-6 rounded-lg border border-parchment">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  How long does shipping take?
                </h3>
                <p className="text-stone-grey">
                  We ship Australia-wide with delivery typically taking 5-7 business days. Guards
                  are shipped pre-folded for easy handling. You'll receive tracking information once
                  your order is dispatched. For urgent orders or bulk shipments, please contact us directly.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-spring-meadow p-6 rounded-lg border border-parchment">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Does Moonochew work with all cattle breeds?
                </h3>
                <p className="text-stone-grey">
                  Yes! Moonochew has been tested for over 12 years with various cattle breeds
                  including Angus, Hereford, dairy breeds, and even curious bulls. The barbed
                  stainless steel design consistently deters cattle from rubbing or browsing on
                  protected trees, regardless of breed or temperament.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-spring-meadow p-6 rounded-lg border border-parchment">
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  Do you offer bulk or wholesale pricing?
                </h3>
                <p className="text-stone-grey">
                  Absolutely! We work with landcare groups, councils, large-scale regeneration
                  projects, and farms needing multiple guards. We also offer rental and fee-for-service
                  models given Moonochew's infinite reusability. Please use the contact form above
                  or email us directly to discuss your requirements.
                </p>
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-12 text-center">
              <p className="text-stone-grey mb-4">
                Still have questions?
              </p>
              <a
                href="mailto:hello@moonochew.com.au"
                className="inline-block bg-golden-wattle text-deep-forest px-8 py-4 rounded-lg font-bold text-lg hover:bg-living-green hover:text-natural-cream transition-colors"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
