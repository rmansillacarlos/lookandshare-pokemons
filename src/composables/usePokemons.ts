import { useQuery } from '@tanstack/vue-query'
import {
  fetchPokemons as fetchPokemonsService,
} from '@/services/pokemon.services.ts'
import { useLoader } from '@/composables/useLoader'
import { usePokemonStore } from '@/stores/pokemonStore'

const usePokemons = () => {
  const pokemonStore = usePokemonStore()

  const fetchPokemons = async () => {
    const resp: any = await fetchPokemonsService()

    const pokemonsApi = resp.results
    pokemonStore.setPokemons(pokemonsApi)
    
    return pokemonsApi
  }

  const { isLoading, isError, data, refetch, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  })

  useLoader(isLoading)

  return {
    fetchPokemons: refetch,
    isError,
    error
  }
}

export default usePokemons