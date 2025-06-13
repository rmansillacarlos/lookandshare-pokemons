<script setup lang="ts">
  import { RouterView, useRoute } from 'vue-router'
  import { useNavLinks } from '@/composables/useNavLinks.ts'
  import { storeToRefs } from 'pinia'
  import NavItem from '@/components/layout/NavItem.vue'
  import InputText from '@/components/ui/InputText.vue'
  import { usePokemonStore } from '@/stores/pokemon.store'

  const route = useRoute()
  const pokemonStore = usePokemonStore()

  const { searchText } = storeToRefs(pokemonStore)
  const { navLinks } = useNavLinks()
</script>

<template>
  <main class="mt-8 w-[320px] md:w-[570px]">
    <InputText
      class="mb-10"
      placeholder="Search"
      v-model="searchText"
    />
    <div class="mb-[calc(75px+16px)]">
      <RouterView :key="$route.fullPath" />
    </div>
    <nav class="p-4 bg-white flex gap-4">
      <ul class="mx-auto w-full flex gap-4 md:max-w-[570px]">
        <NavItem
          v-for="navItem in navLinks"
          :key="navItem.path"
          :path="navItem.path"
          :icon="navItem.icon"
          :active="route.path.startsWith(navItem.path)"
        >
          {{ navItem.text }}
        </NavItem>
      </ul>
    </nav>
  </main>
</template>

<style>
nav {
  position: fixed;
  bottom: 0;
  width: 100vw;
  left: 0;
}
</style>