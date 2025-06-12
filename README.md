# global-pokemons

Este proyecto fue hecho con Vue 3 en su última versión (3.5.13) + Vite + Pinia. Sus rutas son gestionadas con Vue-router. Y sus estilos hechos con TailwindCSS.

## Herramientas

### TailwindCSS
Para la estilización del contenido opté por usar TailwindCSS, ya que sus clases utilitarias son una buena opción para maquetar los componetes UI que serán recurrentes en la app y mantener un estándar de separación de elementos consistente. En resumen, muy buena opción para este desafío.

### Iconify
Seleccioné Iconify como librería de íconos por su implementación simple y reutilizable. Cree un componente Icon en components/ui para estandarizar la iconografía en un sólo componente agnóstico.

## Project Setup

```sh
npm install
```
```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```