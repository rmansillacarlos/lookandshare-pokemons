import { defineStore } from 'pinia'
import type { PokemonItem } from '@/types/pokemon'

interface State {
  pokemons: PokemonItem[]
  favorites: string[]
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): State => ({
    pokemons: [],
    favorites: []
  }),
  getters: {
    pokemonsWithFav(state: State) {
      return state.pokemons.map(p => ({
        ...p,
        favorite: this.favorites.includes(p.name)
      }))
    },   
    favoritePokemons(state) {
      return state.favorites?.map(name => ({
        name, 
        favorite: true
      }))
    }
  },
  actions: {
    addOrRemoveFavorite(name: string) {
      const index = this.favorites.indexOf(name)
      if (index !== -1) this.favorites.splice(index, 1)
      else this.favorites.push(name)
      this.saveFavorites()
    },
    saveFavorites() {
      localStorage.setItem('pokemonFavorites', JSON.stringify(this.favorites))
    },
    loadFromStorage() {
      const stored = localStorage.getItem('pokemonFavorites')
      this.favorites = stored ? JSON.parse(stored) : []
    },
    setPokemons(newValue: PokemonItem[]) {
      this.pokemons = newValue
    }
  },
})