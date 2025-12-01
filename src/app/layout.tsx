import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Moonochew - Protecting Trees. Regenerating Farms.',
  description: "The world's only cattle-resistant, barbed stainless spring steel tree guard. Made in Australia, built to last forever.",
  keywords: ['tree guard', 'cattle resistant', 'regenerative agriculture', 'Australian made', 'tree protection'],
  authors: [{ name: 'Moonochew' }],
  openGraph: {
    title: 'Moonochew - Protecting Trees. Regenerating Farms.',
    description: "The world's only cattle-resistant, barbed stainless spring steel tree guard.",
    url: 'https://moonochew.com',
    siteName: 'Moonochew',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
