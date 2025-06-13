export interface PokemonItem {
  name: string
  url: string
}

export interface PokemonData {
  name: string
  weight: number
  height: number
  types: string[],
  img: string
}

interface PokemonSpritesResponse {
  other: {
    'official-artwork': {
      front_default: string
    }
  }
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