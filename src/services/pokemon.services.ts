import api from '@/api'
import type { Pokemon } from '@/types/pokemon'

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const response = await api.get('pokemon?limit=100000&offset=0')

  return response.data
}