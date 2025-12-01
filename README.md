# Moonochew Website

A modern website for Moonochew - the world's only cattle-resistant, barbed stainless spring steel tree guard.

Built with Next.js, TinaCMS, and Tailwind CSS. Designed for Cloudflare Pages hosting.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **CMS:** TinaCMS + TinaCloud
- **Styling:** Tailwind CSS (Australian Pastoral theme)
- **Forms:** Cloudflare Workers + Resend
- **Hosting:** Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
cd moonochew-website

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env.local` file with:

```
# TinaCMS (get from tina.io)
NEXT_PUBLIC_TINA_CLIENT_ID=your-tina-client-id
TINA_TOKEN=your-tina-token

# Resend (get from resend.com)
RESEND_API_KEY=your-resend-api-key

# Site URL
NEXT_PUBLIC_SITE_URL=https://moonochew.com
```

## Development

```bash
# Start dev server with TinaCMS
pnpm dev

# Build for production
pnpm build

# Lint code
pnpm lint
```

## Project Structure

```
├── content/           # TinaCMS content files
│   ├── pages/         # Page content
│   ├── testimonials/  # Customer testimonials
│   ├── faqs/          # FAQ items
│   └── global/        # Site-wide settings
├── functions/         # Cloudflare Workers
├── public/
│   └── images/photos/ # Product photos
├── src/
│   ├── app/           # Next.js pages
│   ├── components/
│   │   ├── forms/     # Form components
│   │   ├── layout/    # Navigation, Footer
│   │   ├── sections/  # Page sections
│   │   └── ui/        # Reusable UI components
│   └── lib/           # Utilities
└── tina/              # TinaCMS configuration
```

## Content Editing

1. Go to `yoursite.com/admin`
2. Log in with TinaCloud credentials
3. Edit content visually
4. Changes auto-deploy in ~2 minutes

## Deployment

### Cloudflare Pages

1. Connect repository to Cloudflare Pages
2. Set build settings:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `pnpm build`
   - Build output: `out`
3. Add environment variables
4. Deploy

### TinaCloud Setup

1. Create account at [tina.io](https://tina.io)
2. Connect GitHub repository
3. Copy Client ID and Token to environment variables

## Documentation

- [Photos Needed](./PHOTOS_NEEDED.md) - List of photos to capture
- [Stripe Upgrade Guide](./docs/STRIPE_UPGRADE.md) - Payment integration instructions

## Design System

### Colors (Australian Pastoral)

| Name | Hex | Usage |
|------|-----|-------|
| Eucalyptus Night | #1a1f1c | Primary background |
| Paddock Dark | #252b27 | Secondary background |
| Mulch | #2f3633 | Cards, inputs |
| Ochre | #c8923a | Primary accent |
| Gum Leaf | #7d9a78 | Secondary accent |
| Cream | #f5f2eb | Primary text |
| Sandstone | #a8a095 | Secondary text |

### Typography

- **Headlines:** Instrument Serif
- **Body:** Inter

## License

Copyright Moonochew. All rights reserved.
