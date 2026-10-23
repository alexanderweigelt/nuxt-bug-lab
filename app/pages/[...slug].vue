<script setup lang="ts">
import type { PageDoc } from '../../shared/types/content'

// Catch-all: jede URL landet hier. Erst entscheiden, WAS geladen wird, dann laden.
const CONTENT_TYPES = ['touren', 'news']

const route = useRoute()

const segments = computed(() => route.path.split('/').filter(Boolean))
// Vorletztes Segment: /touren/gipfelweg -> "touren". Bei nur einem Segment gibt es keins.
const contentType = computed(() => segments.value.at(-2))
const isContent = computed(() => !!contentType.value && CONTENT_TYPES.includes(contentType.value))

const endpoint = computed(() =>
  isContent.value ? '/api/content' : `/api/sitemap${route.path === '/' ? '' : route.path}`,
)
const query = computed(() => (isContent.value ? { type: contentType.value, slug: segments.value.at(-1) } : undefined))

// useFetch reicht beim SSR die Header des eingehenden Requests (z. B. x-club-id) an die interne Route durch.
const { data: page, error } = await useFetch<PageDoc>(endpoint, { query })

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode ?? 500,
    statusMessage: error.value.statusMessage,
    fatal: true,
  })
}

useHead({ title: () => page.value?.title })
</script>

<template>
  <PageComponent v-if="page" :page="page" />
</template>
