interface NavLink {
  path: string
  text: string
  icon: string
}

export const useNavLinks = () => {
  const navLinks: NavLink[] = [
    {
      path: '/pokemons/all',
      text: 'All',
      icon: 'mdi:format-list-bulleted'
    },
    {
      path: '/pokemons/fav',
      text: 'Favorites',
      icon: 'mdi:star'
    }
  ]

  return {
    navLinks
  }
}