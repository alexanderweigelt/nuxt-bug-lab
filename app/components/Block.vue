<script setup lang="ts">
import type { Component } from 'vue'
import type { BlockDoc } from '../../shared/types/content'
import TextBlock from './blocks/TextBlock.vue'
import ImageBlock from './blocks/ImageBlock.vue'
import QuoteBlock from './blocks/QuoteBlock.vue'
import StatsBlock from './blocks/StatsBlock.vue'
import TeaserListBlock from './blocks/TeaserListBlock.vue'

const props = defineProps<{ block: BlockDoc }>()

const componentMap: Record<string, Component> = {
  text: TextBlock,
  image: ImageBlock,
  quote: QuoteBlock,
  stats: StatsBlock,
  'teaser-list': TeaserListBlock,
}

const component = computed(() => componentMap[props.block.blockType])
</script>

<template>
  <component :is="component" v-if="component" :block="block" />
  <!-- Unbekannter blockType: bewusst kein Fehler, nur ein leerer Platzhalter. -->
  <div v-else class="block-placeholder" :data-unknown-block="block.blockType" />
</template>
