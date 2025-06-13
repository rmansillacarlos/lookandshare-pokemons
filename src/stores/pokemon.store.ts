import { defineStore } from 'pinia'
import type { PokemonDetail, PokemonItem } from '@/types/pokemon'

interface State {
  pokemonDetail: PokemonDetail
  pokemons: PokemonItem[]
  favorites: string[]
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): State => ({
    pokemonDetail: {
      name: '',
      weight: 0,
      height: 0,
      types: []
    },
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
      const exists = index !== -1
      if (exists) {
        this.favorites.splice(index, 1)
      } 
      else this.favorites.push(name)

      this.setPokemonDetailFavorite(!exists)
      this.saveFavorites()
    },
    setPokemonDetailFavorite(value: boolean) {
       this.pokemonDetail = {
        ...this.pokemonDetail,
        favorite: value
      }
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
    },
    setPokemonDetail(pokemonData: PokemonDetail) {
      const isFavorite = !!this.favorites.find(name => name === pokemonData.name)
      this.pokemonDetail = {
        ...pokemonData,
        favorite: isFavorite
      }
    },
  },
})