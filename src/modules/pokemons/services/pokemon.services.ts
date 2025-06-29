import api from '@/api'
import type { PokemonDataResponse, PokemonsResponse } from '@/modules/pokemons/types/pokemon'

export const fetchPokemons = async (): Promise<PokemonsResponse> => {
  const response = await api.get('pokemon?limit=100000&offset=0')

  return response.data
}

export const getPokemon = async (name: string): Promise<PokemonDataResponse> => {
  const response = await api.get(`pokemon/${name}`)

  return response.data
}