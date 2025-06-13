import api from '@/api'
import type { PokemonDataResponse, PokemonsResponse } from '@/types/pokemon'

export const fetchPokemons = async (): Promise<PokemonsResponse> => {
  const response = await api.get('pokemon?limit=100000&offset=0')

  return response.data
}

export const getPokemon = async (name: any): Promise<PokemonDataResponse> => {
  const response = await api.get(`pokemon/${name}`)

  return response.data
}