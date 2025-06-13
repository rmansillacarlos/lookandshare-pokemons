import { defineStore } from 'pinia'
import type { PokemonDetail, PokemonItem } from '@/modules/pokemons/types/pokemon'

interface State {
  pokemonDetail: PokemonDetail
  pokemons: PokemonItem[]
  favorites: string[]
  searchText: string
  searchNotFound: boolean
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
    searchText: '',
    searchNotFound: false
  }),
  getters: {
    pokemonsWithFav(state: State) {
      let outPokemons: PokemonItem[] = []
      if (!!this.searchText.length) {
        outPokemons = state.pokemons.filter((p: PokemonItem) => p.name.includes(this.searchText))
        this.searchNotFound = !outPokemons.length
      } else {
        outPokemons = state.pokemons
      }
      this.searchNotFound = false
      return outPokemons.map((p: PokemonItem) => ({
        ...p,
        favorite: this.favorites.includes(p.name)
      }))
    },   
    favoritePokemons(state) {
      let outPokemons: string[] = []
      if (!!this.searchText.length) {
        outPokemons = state.favorites.filter((p: string) => p.includes(this.searchText))
        this.searchNotFound = !outPokemons.length
      } else {
        outPokemons = state.favorites
      }
      this.searchNotFound = false

      return outPokemons?.map(name => ({
        name, 
        favorite: true
      }))
    }
  },
  actions: {
    reset() {
      this.resetPokemonDetail()
      this.pokemons = []
      this.searchText = ''
      this.searchNotFound = false
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
    },
    setSearchNotFound(value: boolean) {
      this.searchNotFound = value
    }
  },
})