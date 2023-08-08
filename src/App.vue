<script setup>
import { ref, computed } from 'vue'
import EntryForm from './components/EntryForm.vue'
import ViewData from './components/ViewData.vue'

const routes = {
  '/': EntryForm,
  '/data': ViewData,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <component :is="currentView" />
</template>