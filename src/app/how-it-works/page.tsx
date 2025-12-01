import { client } from '../../../tina/__generated__/client'
import HowItWorksPageClient from '@/components/pages/HowItWorksPageClient'

export default async function HowItWorks() {
  const result = await client.queries.howItWorks({ relativePath: 'how-it-works.json' })

  return (
    <HowItWorksPageClient
      data={result.data}
      variables={result.variables}
      query={result.query}
    />
  )
}
