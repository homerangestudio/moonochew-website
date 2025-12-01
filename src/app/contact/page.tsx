import { client } from '../../../tina/__generated__/client'
import ContactPageClient from '@/components/pages/ContactPageClient'
import { getSiteSettings } from '@/lib/settings'

export default async function ContactPage() {
  const [result, settings] = await Promise.all([
    client.queries.contact({ relativePath: 'contact.json' }),
    getSiteSettings(),
  ])

  return (
    <ContactPageClient
      data={result.data}
      variables={result.variables}
      query={result.query}
      turnstileSiteKey={settings?.security?.turnstileSiteKey}
    />
  )
}
