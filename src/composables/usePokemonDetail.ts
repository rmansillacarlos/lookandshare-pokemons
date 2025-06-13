import { useQuery } from '@tanstack/vue-query'
import { storeToRefs } from 'pinia'
import {
  getPokemon as getPokemonService
} from '@/services/pokemon.services.ts'
import type { PokemonDetail, PokemonDataResponse } from '@/types/pokemon'
import { usePokemonStore } from '@/stores/pokemon.store'

const usePokemonDetail = (nameParam: string) => {
  const pokemonStore = usePokemonStore()
  const { pokemonDetail } = storeToRefs(pokemonStore)
  const getPokemon = async (nameParam: string): Promise<PokemonDetail> => {
    const resp: PokemonDataResponse = await getPokemonService(nameParam)
    const { weight, name, height, types: apiTypes, sprites }: PokemonDataResponse = resp

    const img = sprites.other['official-artwork'].front_default
    const types = apiTypes.map(t => t.type.name)

    const pokemonDetail = { name, weight, height, types, img }
    pokemonStore.setPokemonDetail(pokemonDetail)

    return pokemonDetail
  }

  const { isLoading, isError, error, refetch } = useQuery({
    queryKey: ['pokemonDetail', nameParam],
    queryFn: () => getPokemon(nameParam),
    enabled: !!nameParam
  })

  return {
    pokemonDetail,
    getPokemonDetail: refetch,
    isLoading,
    isError,
    error
  }
}

export default usePokemonDetail