import { client } from '../../tina/__generated__/client'
import HomePageClient from '@/components/pages/HomePageClient'

export default async function Home() {
  // Fetch data from TinaCMS
  const result = await client.queries.home({ relativePath: 'home.json' })

  return (
    <HomePageClient
      data={result.data}
      variables={result.variables}
      query={result.query}
    />
  )
}
