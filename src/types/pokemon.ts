export interface PokemonItem {
  name: string
  favorite: string
}

export interface PokemonData {
  name: string
  weight: number
  height: number
  types: string[],
  img?: string
}

interface PokemonSpritesResponse {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
}

export interface PokemonsResponse {
  results: PokemonItem[]
}

export interface PokemonDataResponse {
  name: string
  weight: number
  height: number
  types: {
    type: {
      name: string
    }
  }[]
  sprites: PokemonSpritesResponse
}