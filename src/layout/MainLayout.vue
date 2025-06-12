<script setup>
  import { RouterView, useRoute } from 'vue-router'
  import { useNavLinks } from '@/composables/useNavLinks.ts'
  import NavItem from '@/components/layout/NavItem.vue'

  const route = useRoute()
  const { navLinks } = useNavLinks()
</script>

<template>
  <div class="mb-[calc(75px+16px)]">
    <RouterView />
  </div>
  <nav class="p-4 bg-white flex gap-4">
    <ul class="mx-auto flex gap-4">
      <NavItem
        v-for="navItem in navLinks" :key="navItem.path" :path="navItem.path"
        :active="route.path === navItem.path"
      >
        {{ navItem.text }}
      </NavItem>
    </ul>
  </nav>
</template>

<style>
nav {
  position: fixed;
  bottom: 0;
  width: 100vw;
  left: 0;
}
</style>