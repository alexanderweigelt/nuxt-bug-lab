<script setup lang="ts">
import type { BlockDoc } from '../../../shared/types/content'

defineProps<{ block: BlockDoc }>()
</script>

<template>
  <figure class="block image-block">
    <div class="image-dummy" role="img" :aria-label="block.caption" />
    <figcaption>{{ block.caption }}</figcaption>
  </figure>
</template>
