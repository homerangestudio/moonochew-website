interface TestimonialProps {
  quote: string
  author: {
    name: string
    role: string
    company?: string
  }
  variant?: 'default' | 'centered' | 'large'
}

export default function Testimonial({
  quote,
  author,
  variant = 'default',
}: TestimonialProps) {
  const isCentered = variant === 'centered'
  const isLarge = variant === 'large'

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className={`max-w-5xl ${isCentered ? 'mx-auto text-center' : ''}`}>
          {/* Quote Marks */}
          <div className={`text-ochre/30 mb-6 ${isCentered ? 'flex justify-center' : ''}`}>
            <svg
              className={`${isLarge ? 'w-20 h-20' : 'w-16 h-16'}`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Quote Text */}
          <blockquote
            className={`${
              isLarge ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-2xl md:text-3xl lg:text-4xl'
            } leading-relaxed mb-8 text-cream`}
          >
            {quote}
          </blockquote>

          {/* Author */}
          <div className={`space-y-1 ${isCentered ? 'flex flex-col items-center' : ''}`}>
            <div className="text-xl md:text-2xl font-semibold text-ochre">
              {author.name}
            </div>
            <div className="text-base md:text-lg text-sandstone">
              {author.role}
              {author.company && <span className="text-gum-leaf"> • {author.company}</span>}
            </div>
          </div>

          {/* Decorative line */}
          <div className={`mt-12 ${isCentered ? 'flex justify-center' : ''}`}>
            <div className="w-24 h-1 bg-gradient-to-r from-ochre to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
