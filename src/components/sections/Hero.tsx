import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'

interface HeroProps {
  badge?: string
  headline: string
  highlightedText?: string
  subheadline: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  stats?: Array<{
    value: string
    label: string
  }>
  imageDescription?: string
}

export default function Hero({
  badge,
  headline,
  highlightedText,
  subheadline,
  primaryCta,
  secondaryCta,
  stats = [
    { value: '12+ Years', label: 'Lasting Quality' },
    { value: 'Infinite Reuse', label: 'Sustainability' },
    { value: '10 Min Setup', label: 'Quick & Easy' },
  ],
  imageDescription = 'Hero image showcasing Moonochew product',
}: HeroProps) {
  const renderHeadline = () => {
    if (!highlightedText) return headline

    const parts = headline.split(highlightedText)
    return (
      <>
        {parts[0]}
        <span className="relative inline-block">
          <span className="relative z-10">{highlightedText}</span>
          <span className="absolute inset-0 bg-ochre/20 -skew-y-1 rounded-lg" />
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <section className="relative section-padding overflow-hidden">
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-eucalyptus-night via-paddock-dark to-eucalyptus-night opacity-50" />
      <div className="absolute inset-0 bg-gradient-radial from-ochre/5 via-transparent to-transparent" />

      <div className="container-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-ochre/10 border border-ochre/30 rounded-full text-ochre text-sm font-medium">
                <span className="w-2 h-2 bg-ochre rounded-full animate-pulse" />
                {badge}
              </div>
            )}

            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight text-balance">
              {renderHeadline()}
            </h1>

            <p className="text-lg md:text-xl text-gum-leaf leading-relaxed max-w-2xl">
              {subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href={primaryCta.href}>
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button variant="secondary" size="lg" href={secondaryCta.href}>
                  {secondaryCta.text}
                </Button>
              )}
            </div>

            {/* Stats Row */}
            {stats && stats.length > 0 && (
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-ochre/20">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-1">
                    <div className="text-2xl md:text-3xl font-bold text-ochre">
                      {stat.value}
                    </div>
                    <div className="text-sm text-sandstone">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Image */}
          <div className="relative">
            <ImagePlaceholder description={imageDescription} aspectRatio="4/3" />
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ochre/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
