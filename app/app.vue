<script setup lang="ts">
const { site } = useSiteConfig()
</script>

<template>
  <div class="layout">
    <NavMenu />
    <main>
      <NuxtPage />
    </main>
    <footer>{{ site?.footerText }}</footer>
  </div>
</template>
