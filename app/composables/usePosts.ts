import type { Post } from '../../shared/types/content'

// State: category + search (refs). Abgeleitet: posts + count (computed). Seiteneffekt: watch.
export function usePosts(initialCategory?: MaybeRefOrGetter<string | undefined>) {
  const category = ref(toValue(initialCategory))
  const search = ref('')

  const { data, status, error } = useFetch<Post[]>('/api/posts', {
    query: { category },
    default: () => [],
  })

  const posts = computed(() => {
    const needle = search.value.trim().toLowerCase()
    return data.value.filter((p) => p.title.toLowerCase().includes(needle))
  })
  const count = computed(() => posts.value.length)

  // Andere Kategorie -> alter Suchbegriff ergibt keinen Sinn mehr.
  watch(category, () => {
    search.value = ''
  })

  return { category, search, posts, count, status, error }
}
