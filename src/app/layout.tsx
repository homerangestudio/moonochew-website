import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import { getSiteSettings } from '@/lib/settings'

export const metadata: Metadata = {
  metadataBase: new URL('https://moonochew.com.au'),
  title: {
    default: 'Moonochew - Protecting Trees. Regenerating Farms.',
    template: '%s | Moonochew',
  },
  description: "The world's only cattle-resistant, barbed stainless spring steel tree guard. Made in Australia, built to last forever.",
  keywords: ['tree guard', 'cattle resistant', 'regenerative agriculture', 'Australian made', 'tree protection', 'farm tree guard', 'livestock proof'],
  authors: [{ name: 'Moonochew' }],
  creator: 'Moonochew',
  publisher: 'Moonochew',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Moonochew - Protecting Trees. Regenerating Farms.',
    description: "The world's only cattle-resistant, barbed stainless spring steel tree guard. Made in Australia, built to last forever.",
    url: 'https://moonochew.com.au',
    siteName: 'Moonochew',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moonochew Tree Guards - Protecting Australian Farms',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moonochew - Protecting Trees. Regenerating Farms.',
    description: "The world's only cattle-resistant, barbed stainless spring steel tree guard.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const settings = await getSiteSettings()
  const gaId = settings?.analytics?.googleAnalyticsId

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics measurementId={gaId} />
        <Navigation
          logo={settings?.branding?.logo}
          logoAlt={settings?.branding?.logoAlt}
          siteName={settings?.branding?.siteName}
        />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
