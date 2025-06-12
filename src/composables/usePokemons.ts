import { useQuery } from '@tanstack/vue-query'
import { fetchPokemons as fetchPokemonsService } from '@/services/pokemon.services.ts'

const usePokemons = () => {
  const fetchPokemons = async () => {
    const resp: any = await fetchPokemonsService()
    
    return resp.results
  }

  const { isFetching, isError, data, error } = useQuery({
    queryKey: ['pokemons'],
    queryFn: fetchPokemons,
  })

  return {
    pokemons: data,
    isFetching,
    isError,
    error
  }
}

export default usePokemons