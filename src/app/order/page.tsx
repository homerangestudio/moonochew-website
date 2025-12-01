import { client } from '../../../tina/__generated__/client'
import OrderPageClient from '@/components/pages/OrderPageClient'
import { getSiteSettings } from '@/lib/settings'

export default async function OrderPage() {
  const [result, settings] = await Promise.all([
    client.queries.order({ relativePath: 'order.json' }),
    getSiteSettings(),
  ])

  return (
    <OrderPageClient
      data={result.data}
      variables={result.variables}
      query={result.query}
      turnstileSiteKey={settings?.security?.turnstileSiteKey}
    />
  )
}
