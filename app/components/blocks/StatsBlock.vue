<script setup lang="ts">
import type { BlockDoc } from '../../../shared/types/content'

defineProps<{ block: BlockDoc }>()
</script>

<template>
  <section class="block">
    <h2>{{ block.heading }}</h2>
    <dl>
      <div v-for="item in block.items" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>{{ item.value }}</dd>
      </div>
    </dl>
    <small>Stand: {{ block.updated }}</small>
  </section>
</template>
