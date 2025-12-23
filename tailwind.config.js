/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Regenerative Green Palette - Fresh, Alive, Professional

        // Primary Greens (Tree Growth & Regeneration)
        'spring-meadow': '#e8f5e3',      // Very light fresh green - primary light background
        'new-growth': '#c8e6c0',          // Soft green - secondary backgrounds
        'living-green': {
          DEFAULT: '#4a9d3f',             // Vibrant healthy green - primary brand color
          light: '#5db350',               // Lighter variant for hover states
          dark: '#3d8534',                // Darker variant for pressed states
        },
        'forest-canopy': {
          DEFAULT: '#2d7a26',             // Deep rich green - depth and contrast
          light: '#389030',               // Lighter variant
          dark: '#24651f',                // Darker variant
        },
        'deep-forest': '#1a5014',         // Dark green - text on light backgrounds

        // Warm Earth Tones (Australian Connection)
        'golden-wattle': {
          DEFAULT: '#f4c542',             // Bright warm gold - primary accent
          light: '#f7d164',               // Lighter variant
          dark: '#d9ad2a',                // Darker variant
        },
        'sunset-ochre': '#d4a356',        // Warm golden tan - secondary accent
        'clay-earth': '#c17d4a',          // Terracotta/rust tone
        'rich-soil': '#4a3820',           // Deep brown - grounding element

        // Neutrals (Professional Balance)
        'natural-cream': '#fffdf7',       // Warm off-white - alternative light background
        'parchment': '#f5f1e8',           // Soft warm neutral
        'stone-grey': '#8a8479',          // Medium neutral - secondary text
        'charcoal': '#2d2b26',            // Dark text on light backgrounds

        // Functional Colors
        'alert-rust': '#d4563a',          // Error/warning states
        'success-sprout': '#5cb85c',      // Success states

        // Accent Colors
        'davidson-plum': '#6B2D5B',       // Deep purple/burgundy - for "Growing Food" accent
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'green': '0 4px 16px rgba(74, 157, 63, 0.15)',      // Living green soft shadow
        'green-lg': '0 8px 32px rgba(74, 157, 63, 0.2)',    // Larger green shadow
        'gold': '0 4px 16px rgba(244, 197, 66, 0.2)',       // Golden wattle accent shadow
        'gold-lg': '0 8px 32px rgba(244, 197, 66, 0.25)',   // Larger gold shadow
        'natural': '0 4px 16px rgba(45, 43, 38, 0.08)',     // Subtle neutral shadow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-warm': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
