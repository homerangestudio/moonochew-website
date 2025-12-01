import ImagePlaceholder from '../ui/ImagePlaceholder'

interface Feature {
  badge?: string
  headline: string
  description: string
  bulletPoints?: string[]
  imageDescription: string
  imageOnRight?: boolean
}

interface FeaturesProps {
  features: Feature[]
}

function FeatureItem({ feature, index }: { feature: Feature; index: number }) {
  const imageOnRight = feature.imageOnRight ?? index % 2 === 0

  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index > 0 ? 'mt-24 lg:mt-32' : ''}`}>
      {/* Content */}
      <div className={`space-y-6 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
        {feature.badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-ochre/10 border border-ochre/30 rounded-full text-ochre text-sm font-medium">
            {feature.badge}
          </div>
        )}

        <h3 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
          {feature.headline}
        </h3>

        <p className="text-lg md:text-xl text-gum-leaf leading-relaxed">
          {feature.description}
        </p>

        {/* Bullet Points with Checkmarks */}
        {feature.bulletPoints && feature.bulletPoints.length > 0 && (
          <ul className="space-y-4 pt-4">
            {feature.bulletPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ochre/20 flex items-center justify-center mt-0.5">
                  <svg
                    className="w-4 h-4 text-ochre"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base md:text-lg text-cream">{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Image */}
      <div className={`relative ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
        <ImagePlaceholder description={feature.imageDescription} aspectRatio="4/3" />
        {/* Decorative element */}
        <div className={`absolute -bottom-6 ${imageOnRight ? '-right-6' : '-left-6'} w-32 h-32 bg-gum-leaf/10 rounded-full blur-3xl`} />
      </div>
    </div>
  )
}

export default function Features({ features }: FeaturesProps) {
  return (
    <section className="section-padding">
      <div className="container-width">
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}
