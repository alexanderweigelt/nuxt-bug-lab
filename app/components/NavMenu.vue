<script setup lang="ts">
const { site, navItems } = useSiteConfig()
const route = useRoute()

// Welche URL der Browser gerade zeigt, wissen wir nur im Client -> onMounted.
const currentPath = ref('')
const menuOpen = ref(false)

const syncPath = () => {
  currentPath.value = window.location.pathname
}

onMounted(syncPath)
// Bei Client-Navigation laeuft onMounted nicht erneut -> Seiteneffekt per watch.
watch(() => route.path, () => {
  syncPath()
  menuOpen.value = false
})
</script>

<template>
  <header>
    <strong>{{ site?.name }}</strong>
    <button type="button" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">Menue</button>
    <nav :class="{ open: menuOpen }">
      <NuxtLink
        v-for="item in navItems"
        :key="item.href"
        :to="item.href"
        :aria-current="currentPath === item.href ? 'page' : undefined"
      >
        {{ item.label }}
      </NuxtLink>
    </nav>
  </header>
</template>
