import type { PageDoc, Post, SiteConfig } from '../../shared/types/content'

export const site: SiteConfig = {
  name: 'Fernblick Wanderverein',
  footerText: 'Fernblick Wanderverein e.V. – erfundene Daten, nur zum Ueben.',
  nav: [
    { label: 'Start', href: '/' },
    { label: 'Touren', href: '/touren' },
    { label: 'News', href: '/news' },
    { label: 'Verein', href: '/verein' },
  ],
}

export const posts: Post[] = [
  { id: 'p1', category: 'touren', title: 'Gipfelweg', slug: 'gipfelweg', teaser: 'Steil, aber die Aussicht lohnt sich.' },
  { id: 'p2', category: 'touren', title: 'Seenrunde', slug: 'seenrunde', teaser: 'Flach, drei Seen, Badesachen mitnehmen.' },
  { id: 'p3', category: 'touren', title: 'Saisonstart', slug: 'saisonstart', teaser: 'Erste Tour des Jahres, kurze Strecke.' },
  { id: 'p4', category: 'news', title: 'Saisonstart', slug: 'saisonstart', teaser: 'Die Saison beginnt am ersten Samstag im April.' },
  { id: 'p5', category: 'news', title: 'Huettenfest', slug: 'huettenfest', teaser: 'Anmeldung bis zum 1. Juni.' },
]

const text = (id: string, heading: string, body: string[]) => ({ id, blockType: 'text', heading, body })

export const pages: Record<string, PageDoc> = {
  '/': {
    id: 'home',
    title: 'Willkommen beim Wanderverein',
    blocks: [
      text('h1', 'Raus aus dem Buero', ['Wir wandern. Jeden Samstag, bei fast jedem Wetter.']),
      { id: 'h2', blockType: 'teaser-list', heading: 'Neue Touren', category: 'touren' },
      { id: 'h3', blockType: 'teaser-list', heading: 'Aktuelles', category: 'news' },
      {
        id: 'h4',
        blockType: 'stats',
        heading: 'Der Verein in Zahlen',
        updated: '01.01.2026',
        items: [
          { label: 'Mitglieder', value: '412' },
          { label: 'Touren pro Jahr', value: '87' },
        ],
      },
    ],
  },
  '/touren': {
    id: 'touren-index',
    title: 'Touren',
    blocks: [
      text('t1', 'Alle Touren', ['Von Spaziergang bis Gipfelsturm.']),
      { id: 't2', blockType: 'teaser-list', heading: 'Verfuegbare Touren', category: 'touren' },
    ],
  },
  '/news': {
    id: 'news-index',
    title: 'News',
    blocks: [
      text('n1', 'Neuigkeiten', ['Was gerade im Verein passiert.']),
      { id: 'n2', blockType: 'teaser-list', heading: 'Meldungen', category: 'news' },
    ],
  },
  '/verein': {
    id: 'verein',
    title: 'Der Verein',
    blocks: [
      text('v1', 'Ueber uns', ['Gegruendet von Leuten, die gerne laufen und danach gerne essen.']),
      { id: 'v2', blockType: 'quote', quote: 'Es gibt kein schlechtes Wetter, nur falsche Schuhe.', author: 'Vereinsweisheit' },
      { id: 'v3', blockType: 'image', caption: 'Gruppenfoto am Gipfelkreuz' },
    ],
  },
}

export const content: Record<string, PageDoc> = {
  'touren/gipfelweg': {
    id: 'tour-gipfelweg',
    title: 'Gipfelweg',
    blocks: [
      text('g1', 'Gipfelweg', ['12 km, 900 Hoehenmeter, Trittsicherheit noetig.']),
      { id: 'g2', blockType: 'image', caption: 'Blick vom Gipfel' },
      { id: 'g3', blockType: 'weather', heading: 'Wetter am Gipfel' },
      { id: 'g4', blockType: 'quote', quote: 'Oben ist es kalt.', author: 'Tourenleiter' },
    ],
  },
  'touren/seenrunde': {
    id: 'tour-seenrunde',
    title: 'Seenrunde',
    blocks: [text('s1', 'Seenrunde', ['8 km, flach, drei Seen.'])],
  },
  'touren/saisonstart': {
    id: 'tour-saisonstart',
    title: 'Saisonstart-Tour',
    blocks: [text('ss1', 'Saisonstart-Tour', ['5 km zum Eingewoehnen. Treffpunkt: Parkplatz Nord.'])],
  },
  'news/saisonstart': {
    id: 'news-saisonstart',
    title: 'Saisonstart 2026',
    blocks: [text('ns1', 'Saisonstart 2026', ['Die Saison beginnt am ersten Samstag im April.'])],
  },
  'news/huettenfest': {
    id: 'news-huettenfest',
    title: 'Huettenfest',
    blocks: [text('nh1', 'Huettenfest', ['Es gibt Kuchen. Anmeldung bis zum 1. Juni.'])],
  },
}

export const redirects: Record<string, { to: string; status: number }> = {
  '/wandern': { to: '/touren', status: 301 },
  '/aktuelles': { to: '/news', status: 301 },
}
