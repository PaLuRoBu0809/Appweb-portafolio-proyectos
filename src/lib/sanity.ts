import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '2xugp055',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})