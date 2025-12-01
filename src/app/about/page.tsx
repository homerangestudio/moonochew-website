import { client } from '../../../tina/__generated__/client'
import AboutPageClient from '@/components/pages/AboutPageClient'

export default async function About() {
  const result = await client.queries.about({ relativePath: 'about.json' })

  return (
    <AboutPageClient
      data={result.data}
      variables={result.variables}
      query={result.query}
    />
  )
}
