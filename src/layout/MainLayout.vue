<script setup>
  import { RouterView, useRouter } from 'vue-router'
  import { useNavLinks } from '@/composables/useNavLinks.ts'
  import NavItem from '@/components/layout/NavItem.vue'

  const router = useRouter()
  const { navLinks } = useNavLinks()
</script>

<template>
  <RouterView />
  <nav>
    <ul>
      <NavItem v-for="navItem in navLinks" :key="navItem.path" :path="navItem.path">
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
}
</style>