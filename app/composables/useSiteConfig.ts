import type { SiteConfig } from '../../shared/types/content'

// Wird in mehreren Komponenten aufgerufen (NavMenu, app.vue) – dank festem Key nur ein Request.
export function useSiteConfig() {
  const { data: site } = useFetch<SiteConfig>('/api/site', {
    key: 'site-config',
  })
  const navItems = computed(() => site.value?.nav ?? [])

  return { site, navItems }
}
