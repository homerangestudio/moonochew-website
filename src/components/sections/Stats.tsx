interface Stat {
  number: string
  label: string
  description: string
}

interface StatsProps {
  stats: Stat[]
  title?: string
  description?: string
}

export default function Stats({
  stats,
  title,
  description,
}: StatsProps) {
  return (
    <section className="section-padding bg-paddock-dark/30">
      <div className="container-width">
        {/* Header */}
        {(title || description) && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg md:text-xl text-gum-leaf">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 p-6 rounded-2xl bg-eucalyptus-night/50 border border-ochre/10 hover:border-ochre/30 transition-colors duration-200"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-ochre">
                {stat.number}
              </div>
              <div className="text-lg md:text-xl font-semibold text-cream">
                {stat.label}
              </div>
              <div className="text-sm md:text-base text-sandstone">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
