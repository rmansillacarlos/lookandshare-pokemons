import { useQuery } from '@tanstack/vue-query'
import {
  getPokemon as getPokemonService
} from '@/services/pokemon.services.ts'
import type { PokemonData, PokemonDataResponse } from '@/types/pokemon'

const usePokemonDetail = (nameParam: string) => {
  const getPokemon = async (nameParam: string): Promise<PokemonData> => {
    const resp: PokemonDataResponse = await getPokemonService(nameParam)
    const { weight, name, height, types: apiTypes, sprites }: PokemonDataResponse = resp

    const img = sprites.other['official-artwork'].front_default
    const types = apiTypes.map(t => t.type.name)

    return { name, weight, height, types, img }
  }

  const { isFetching, isError, data, error, refetch } = useQuery({
    queryKey: ['pokemonDetail', nameParam],
    queryFn: () => getPokemon(nameParam),
    enabled: !!nameParam
  })

  return {
    pokemonDetail: data,
    refetch,
    isFetching,
    isError,
    error
  }
}

export default usePokemonDetail