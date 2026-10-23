export interface BlockDoc {
  id: string
  blockType: string
  heading?: string
  body?: string[]
  quote?: string
  author?: string
  caption?: string
  category?: string
  updated?: string
  items?: { label: string; value: string }[]
}

export interface PageDoc {
  id: string
  title: string
  blocks: BlockDoc[]
}

export interface Post {
  id: string
  category: 'touren' | 'news'
  title: string
  slug: string
  teaser: string
}

export interface SiteConfig {
  name: string
  footerText: string
  nav: { label: string; href: string }[]
}
