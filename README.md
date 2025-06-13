# global-pokemons

Este proyecto fue hecho con Vue 3 en su última versión (3.5.13) + Vite + Pinia. Sus rutas son gestionadas con Vue-router. Y sus estilos hechos con TailwindCSS. Contiene test hechos con Vitest.

## Stack tecnológico

### TailwindCSS
Para la estilización del contenido opté por usar TailwindCSS, ya que sus clases utilitarias son una buena opción para maquetar los componetes UI que serán recurrentes en la app y mantener un estándar en el sistema de diseño y una separación de elementos consistente. Me pareció buena opción para este desafío.

### Iconify
Seleccioné Iconify como librería de íconos por su implementación simple y reutilizable. Cree un componente Icon en components/ui para estandarizar la iconografía en un sólo componente agnóstico.

### Vitest
Realicé tests suites de algunos componentes (no todos por tiempo), en mi apreciación los más importantes para el funcionamiento de la app: Componentes de la UI, ListItem, PokemonItem y PokemonModal

### TanstackQuery
Utilicé tanstackQuery para controlar datos en caché y usar sus utilidades en las llamadas a la API

## Levantamiento

```sh
npm install
npm run dev
```

### Correr Unit Tests

```sh
npm run test:unit
```