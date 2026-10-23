<script setup lang="ts">
import type { BlockDoc } from '../../../shared/types/content'

defineProps<{ block: BlockDoc }>()
</script>

<template>
  <section class="block">
    <h2 v-if="block.heading">{{ block.heading }}</h2>
    <p v-for="(paragraph, i) in block.body" :key="i">{{ paragraph }}</p>
  </section>
</template>
