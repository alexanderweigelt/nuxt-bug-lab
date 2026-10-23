import type { SiteConfig } from '../../shared/types/content'

export default defineEventHandler((event) => upstreamFetch<SiteConfig>(event, '/site'))
