import { useQuery } from '@tanstack/vue-query'
import {
  fetchPokemons as fetchPokemonsService,
} from '@/services/pokemon.services.ts'
import { usePokemonStore } from '@/stores/pokemon.store'
import type { PokemonsResponse } from '@/types/pokemon'
import { useAppStore } from '@/stores/app'

const usePokemons = () => {
  const appStore = useAppStore()
  const pokemonStore = usePokemonStore()

  const fetchPokemons = async () => {
      const resp: PokemonsResponse = await fetchPokemonsService()

      const pokemonsApi = resp.results
      pokemonStore.setPokemons(pokemonsApi)
      
      return pokemonsApi
  }

  const { isError, refetch, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    staleTime: 1000 * 60 * 5,
  })

  return {
    fetchPokemons: refetch,
    isError,
    error
  }
}

export default usePokemons