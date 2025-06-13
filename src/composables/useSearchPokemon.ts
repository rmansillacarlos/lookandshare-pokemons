import { watch, type Ref } from 'vue'
import { useQuery } from '@tanstack/vue-query'
import { getPokemon as getPokemonService } from '@/services/pokemon.services'
import { usePokemonStore } from '@/stores/pokemon.store'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const useSearchPokemon = () => {
  const pokemonStore = usePokemonStore()
  const { searchText } = storeToRefs(pokemonStore)

  const router = useRouter()
  
  const searchPokemon = async () => {
    try {
      const resp: any = await getPokemonService(searchText.value)

      // if (resp) {
      //   pokemonStore.setSearchNotFound(false)
      // }

      return true
    } catch (error) {
      // if (error.status === 404) pokemonStore.setSearchNotFound(true)
      // return false
    }
  }

  const { isLoading, refetch } = useQuery({
    queryKey: ['searchPokemon', searchText],
    queryFn: searchPokemon,
    enabled: () => !!searchText.value
  })

  
  // watch(searchText, () => {
  //   fetchPokemons()
  // })

  return { 
    searchText,
    searchPokemon: refetch,
    isLoading
  }
}

export default useSearchPokemon