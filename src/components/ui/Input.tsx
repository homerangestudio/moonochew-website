'use client'

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-charcoal text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`w-full px-4 py-3 bg-white border rounded-xl text-charcoal placeholder:text-stone-grey transition-colors duration-200 focus:outline-none focus:ring-2 ${
            error
              ? 'border-alert-rust focus:border-alert-rust focus:ring-alert-rust/30'
              : 'border-new-growth focus:border-living-green focus:ring-living-green/30'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-alert-rust">{error}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', label, error, id, rows = 4, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-charcoal text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          className={`w-full px-4 py-3 bg-white border rounded-xl text-charcoal placeholder:text-stone-grey resize-none transition-colors duration-200 focus:outline-none focus:ring-2 ${
            error
              ? 'border-alert-rust focus:border-alert-rust focus:ring-alert-rust/30'
              : 'border-new-growth focus:border-living-green focus:ring-living-green/30'
          } ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-alert-rust">{error}</p>}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="block text-charcoal text-sm font-medium mb-2">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={id}
          className={`w-full px-4 py-3 bg-white border rounded-xl text-charcoal transition-colors duration-200 focus:outline-none focus:ring-2 ${
            error
              ? 'border-alert-rust focus:border-alert-rust focus:ring-alert-rust/30'
              : 'border-new-growth focus:border-living-green focus:ring-living-green/30'
          } ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-alert-rust">{error}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
