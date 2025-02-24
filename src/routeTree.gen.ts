/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RecipesImport } from './routes/recipes'
import { Route as RecentlyAddedImport } from './routes/recently-added'
import { Route as MostCookedImport } from './routes/most-cooked'
import { Route as LongTimeImport } from './routes/long-time'
import { Route as FavoriteRecipesImport } from './routes/favorite-recipes'
import { Route as AddRecipeImport } from './routes/add-recipe'
import { Route as IndexImport } from './routes/index'
import { Route as RecipeRecipeIdNameImport } from './routes/recipe.$recipeIdName'
import { Route as CategoryCategoryNameImport } from './routes/category.$categoryName'

// Create/Update Routes

const RecipesRoute = RecipesImport.update({
  path: '/recipes',
  getParentRoute: () => rootRoute,
} as any)

const RecentlyAddedRoute = RecentlyAddedImport.update({
  path: '/recently-added',
  getParentRoute: () => rootRoute,
} as any)

const MostCookedRoute = MostCookedImport.update({
  path: '/most-cooked',
  getParentRoute: () => rootRoute,
} as any)

const LongTimeRoute = LongTimeImport.update({
  path: '/long-time',
  getParentRoute: () => rootRoute,
} as any)

const FavoriteRecipesRoute = FavoriteRecipesImport.update({
  path: '/favorite-recipes',
  getParentRoute: () => rootRoute,
} as any)

const AddRecipeRoute = AddRecipeImport.update({
  path: '/add-recipe',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const RecipeRecipeIdNameRoute = RecipeRecipeIdNameImport.update({
  path: '/recipe/$recipeIdName',
  getParentRoute: () => rootRoute,
} as any)

const CategoryCategoryNameRoute = CategoryCategoryNameImport.update({
  path: '/category/$categoryName',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/add-recipe': {
      id: '/add-recipe'
      path: '/add-recipe'
      fullPath: '/add-recipe'
      preLoaderRoute: typeof AddRecipeImport
      parentRoute: typeof rootRoute
    }
    '/favorite-recipes': {
      id: '/favorite-recipes'
      path: '/favorite-recipes'
      fullPath: '/favorite-recipes'
      preLoaderRoute: typeof FavoriteRecipesImport
      parentRoute: typeof rootRoute
    }
    '/long-time': {
      id: '/long-time'
      path: '/long-time'
      fullPath: '/long-time'
      preLoaderRoute: typeof LongTimeImport
      parentRoute: typeof rootRoute
    }
    '/most-cooked': {
      id: '/most-cooked'
      path: '/most-cooked'
      fullPath: '/most-cooked'
      preLoaderRoute: typeof MostCookedImport
      parentRoute: typeof rootRoute
    }
    '/recently-added': {
      id: '/recently-added'
      path: '/recently-added'
      fullPath: '/recently-added'
      preLoaderRoute: typeof RecentlyAddedImport
      parentRoute: typeof rootRoute
    }
    '/recipes': {
      id: '/recipes'
      path: '/recipes'
      fullPath: '/recipes'
      preLoaderRoute: typeof RecipesImport
      parentRoute: typeof rootRoute
    }
    '/category/$categoryName': {
      id: '/category/$categoryName'
      path: '/category/$categoryName'
      fullPath: '/category/$categoryName'
      preLoaderRoute: typeof CategoryCategoryNameImport
      parentRoute: typeof rootRoute
    }
    '/recipe/$recipeIdName': {
      id: '/recipe/$recipeIdName'
      path: '/recipe/$recipeIdName'
      fullPath: '/recipe/$recipeIdName'
      preLoaderRoute: typeof RecipeRecipeIdNameImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AddRecipeRoute,
  FavoriteRecipesRoute,
  LongTimeRoute,
  MostCookedRoute,
  RecentlyAddedRoute,
  RecipesRoute,
  CategoryCategoryNameRoute,
  RecipeRecipeIdNameRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/add-recipe",
        "/favorite-recipes",
        "/long-time",
        "/most-cooked",
        "/recently-added",
        "/recipes",
        "/category/$categoryName",
        "/recipe/$recipeIdName"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/add-recipe": {
      "filePath": "add-recipe.tsx"
    },
    "/favorite-recipes": {
      "filePath": "favorite-recipes.tsx"
    },
    "/long-time": {
      "filePath": "long-time.tsx"
    },
    "/most-cooked": {
      "filePath": "most-cooked.tsx"
    },
    "/recently-added": {
      "filePath": "recently-added.tsx"
    },
    "/recipes": {
      "filePath": "recipes.tsx"
    },
    "/category/$categoryName": {
      "filePath": "category.$categoryName.tsx"
    },
    "/recipe/$recipeIdName": {
      "filePath": "recipe.$recipeIdName.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
