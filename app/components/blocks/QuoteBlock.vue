<script setup lang="ts">
import type { BlockDoc } from '../../../shared/types/content'

defineProps<{ block: BlockDoc }>()
</script>

<template>
  <blockquote class="block">
    <p>{{ block.quote }}</p>
    <footer>{{ block.author }}</footer>
  </blockquote>
</template>
