import Button from '../ui/Button'

interface CTAProps {
  heading: string
  highlightedWord?: string
  description: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  variant?: 'default' | 'centered' | 'split'
}

export default function CTA({
  heading,
  highlightedWord,
  description,
  primaryCta,
  secondaryCta,
  variant = 'centered',
}: CTAProps) {
  const renderHeading = () => {
    if (!highlightedWord) return heading

    const parts = heading.split(highlightedWord)
    return (
      <>
        {parts[0]}
        <span className="relative inline-block">
          <span className="relative z-10">{highlightedWord}</span>
          <span className="absolute inset-0 bg-ochre/20 -skew-y-1 rounded-lg" />
        </span>
        {parts[1]}
      </>
    )
  }

  if (variant === 'split') {
    return (
      <section className="section-padding bg-paddock-dark/30">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                {renderHeading()}
              </h2>
              <p className="text-lg md:text-xl text-gum-leaf leading-relaxed">
                {description}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row lg:justify-end gap-4">
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button variant="secondary" size="lg" href={secondaryCta.href}>
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ochre/5 via-transparent to-gum-leaf/5" />

      <div className="container-width relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
            {renderHeading()}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gum-leaf leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="primary" size="lg" href={primaryCta.href}>
              {primaryCta.text}
            </Button>
            {secondaryCta && (
              <Button variant="secondary" size="lg" href={secondaryCta.href}>
                {secondaryCta.text}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-ochre/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-gum-leaf/5 rounded-full blur-3xl" />
    </section>
  )
}
