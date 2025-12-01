'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  measurementId: string | null | undefined
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  // Don't render anything if no measurement ID is provided
  if (!measurementId) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  )
}
