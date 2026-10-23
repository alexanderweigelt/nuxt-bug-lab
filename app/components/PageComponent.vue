<script setup lang="ts">
import type { PageDoc } from '../../shared/types/content'

defineProps<{ page: PageDoc }>()
</script>

<template>
  <article>
    <h1>{{ page.title }}</h1>
    <Block v-for="block in page.blocks" :key="block.id" :block="block" />
  </article>
</template>
