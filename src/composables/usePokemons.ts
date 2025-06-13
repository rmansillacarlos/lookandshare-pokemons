import { useQuery } from '@tanstack/vue-query'
import {
  fetchPokemons as fetchPokemonsService,
} from '@/services/pokemon.services.ts'
import { useAppStore } from '@/stores/app'
import { useLoader } from '@/composables/useLoader'

const usePokemons = () => {
  const appStore = useAppStore()

  const fetchPokemons = async () => {
    appStore.setLoading(true)
    const resp: any = await fetchPokemonsService()
    appStore.setLoading(false)
    
    return resp.results
  }

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  })

  useLoader(isLoading)

  return {
    pokemons: data,
    isError,
    error
  }
}

export default usePokemons