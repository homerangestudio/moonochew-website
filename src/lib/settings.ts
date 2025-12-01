import { client } from '../../tina/__generated__/client'

export interface SiteSettings {
  branding: {
    logo?: string
    logoAlt?: string
    siteName?: string
  }
  contact: {
    email: string
    phone: string
    location: string
    region: string
  }
  product: {
    price: number
    currency: string
  }
  seo: {
    title: string
    description: string
    ogImage?: string
  }
  analytics: {
    googleAnalyticsId?: string
  }
  security: {
    turnstileSiteKey?: string
  }
  social: {
    facebook?: string
    instagram?: string
    linkedin?: string
  }
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const result = await client.queries.global({ relativePath: 'settings.json' })
    return result.data.global as unknown as SiteSettings
  } catch (error) {
    console.error('Failed to fetch site settings:', error)
    return null
  }
}
