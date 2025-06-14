import { defineStore } from 'pinia'
import type { PokemonDetail, PokemonItem } from '@/modules/pokemons/types/pokemon'

interface State {
  pokemonDetail: PokemonDetail
  pokemons: PokemonItem[]
  favorites: string[]
  searchText: string
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
    favorites: [],
    searchText: ''
  }),
  getters: {
    pokemonsWithFav: (state: State): PokemonItem[] => {
      let outPokemons: PokemonItem[] = []
      if (!!state.searchText.length) {
        outPokemons = state.pokemons.filter((p: PokemonItem) => p.name.includes(state.searchText))
      } else {
        outPokemons = state.pokemons
      }
      return outPokemons.map((p: PokemonItem) => ({
        ...p,
        favorite: state.favorites.includes(p.name)
      }))
    },   
    favoritePokemons: (state: State): PokemonItem[] => {
      let outPokemons: string[] = []
      if (!!state.searchText.length) {
        outPokemons = state.favorites.filter((p: string) => p.includes(state.searchText))
      } else {
        outPokemons = state.favorites
      }

      return outPokemons?.map(name => ({
        name, 
        favorite: true
      }))
    },
    searchNotFound: (state: State): boolean => {
      let hasResults = false
      if (!!state.searchText.length) {
        hasResults = !!(state.favorites.filter((p: string) => p.includes(state.searchText)).length)
      }
      return hasResults
    },
  },
  actions: {
    reset() {
      this.resetPokemonDetail()
      this.pokemons = []
      this.searchText = ''
    },
    resetPokemonDetail() {
      this.pokemonDetail = {
        name: '',
        weight: 0,
        height: 0,
        types: []
      }
    },
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
    }
  }
})