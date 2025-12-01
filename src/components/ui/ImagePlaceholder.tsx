interface ImagePlaceholderProps {
  description: string
  className?: string
  aspectRatio?: 'square' | 'video' | '4/3' | '3/2'
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
}

export default function ImagePlaceholder({
  description,
  className = '',
  aspectRatio = 'video',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`${aspectRatioClasses[aspectRatio]} bg-gradient-to-br from-paddock-dark to-mulch rounded-2xl flex items-center justify-center border border-ochre/10 overflow-hidden relative ${className}`}
    >
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(200, 146, 58, 0.3) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="text-center p-6 relative z-10">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-ochre/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-ochre"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <p className="text-sandstone text-sm max-w-xs">{description}</p>
      </div>
    </div>
  )
}
