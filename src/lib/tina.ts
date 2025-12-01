import { client } from '../../tina/__generated__/client'

// Re-export the client for easy imports
export { client }

// Helper to fetch home page content
export async function getHomeContent() {
  const result = await client.queries.home({ relativePath: 'home.json' })
  return result
}

// Helper to fetch how-it-works page content
export async function getHowItWorksContent() {
  const result = await client.queries.howItWorks({ relativePath: 'how-it-works.json' })
  return result
}

// Helper to fetch about page content
export async function getAboutContent() {
  const result = await client.queries.about({ relativePath: 'about.json' })
  return result
}

// Helper to fetch order page content
export async function getOrderContent() {
  const result = await client.queries.order({ relativePath: 'order.json' })
  return result
}

// Helper to fetch contact page content
export async function getContactContent() {
  const result = await client.queries.contact({ relativePath: 'contact.json' })
  return result
}
