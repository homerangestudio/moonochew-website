import Card from '../ui/Card'

interface Problem {
  icon: React.ReactNode
  title: string
  description: string
}

interface ProblemCardsProps {
  heading: string
  highlightedWord?: string
  problems: Problem[]
}

export default function ProblemCards({
  heading,
  highlightedWord,
  problems,
}: ProblemCardsProps) {
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

  return (
    <section className="section-padding bg-paddock-dark/30">
      <div className="container-width">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center mb-16 lg:mb-20 max-w-4xl mx-auto">
          {renderHeading()}
        </h2>

        {/* Problem Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} hover>
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-ochre/10 flex items-center justify-center text-ochre mb-6">
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl mb-4">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gum-leaf leading-relaxed">
                {problem.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
