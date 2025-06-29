import { useQuery } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import {
  fetchPokemons as fetchPokemonsService,
} from '@/modules/pokemons/services/pokemon.services'
import { usePokemonStore } from '@/modules/pokemons/store/pokemon.store'
import type { PokemonsResponse } from '@/modules/pokemons/types/pokemon'
import { useAppStore } from '@/stores/app'

const usePokemons = () => {
  const appStore = useAppStore()
  const pokemonStore = usePokemonStore()
  const router = useRouter()

  const fetchPokemons = async () => {
    appStore.setLoading(true)
    const resp: PokemonsResponse = await fetchPokemonsService()

    const pokemonsApi = resp.results
    pokemonStore.setPokemons(pokemonsApi)
    appStore.setLoading(false)
    
    return pokemonsApi
  }

  const { isError, refetch, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
    staleTime: 1000 * 60 * 5,
  })

  const closeModal = () => {
    router.push('/pokemons/all')
  }

  return {
    fetchPokemons: refetch,
    isError,
    error,
    closeModal
  }
}

export default usePokemons