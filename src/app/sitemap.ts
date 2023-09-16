import { APP_DOMAIN } from '@/constants'
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_DOMAIN,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}