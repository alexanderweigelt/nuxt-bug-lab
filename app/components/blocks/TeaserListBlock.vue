<script setup lang="ts">
import type { BlockDoc } from '../../../shared/types/content'

const props = defineProps<{ block: BlockDoc }>()

const { posts, search, count, status } = usePosts(() => props.block.category)
</script>

<template>
  <section class="block">
    <h2>{{ block.heading }}</h2>
    <input v-model="search" type="search" placeholder="Filtern ..." aria-label="Filtern" />
    <p v-if="status === 'pending'">Laedt ...</p>
    <ul v-else>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="`/${post.category}/${post.slug}`">{{ post.title }}</NuxtLink>
        – {{ post.teaser }}
      </li>
    </ul>
    <small>{{ count }} Treffer</small>
  </section>
</template>
