# Cookify

Cookify is an app which helps you to keep track of all your favorite recipes. Furthermore, it features your most cooked dishes and reminds you of the long forgotten but once loved foods that deserve some attention.

## Prerequisites
- Node.js
- pnpm

## Setup  :rocket:
- pnpm install
- pnpm dev

## Tech Stack
- React
-  DaisyUI
-  TanStack Router
-  Vite

## Features :sparkles:
- Add a new recipe to the database
- View Recipes in 3 different categories (e.g. "recently cooked")
- Detailed view for each recipe


## TODO :construction:

This project is still under construction and the following features are planned:
- Comments on recipes
- Counting how many times a recipe has been cooked (with date)
- Rating of recipes by user

## APIs
New API Endpoint: `https://cookify-backend.windesign.workers.dev/`

Endpoints:
| Method | Path | Params | Description |
| - | - | - | - |
| GET | /recipes | - | Returns a list of recipes |
| GET | /recipes/:recipeId | `recipeId` should be the ID (`number`) of the recipe | Returns a single recipe by ID |
| POST | /recipes | <pre>z.object({<br/>  title: z.string(), <br/>  prepTime: z.number(), <br/>  cookingTime: z.number(), <br/>  instructions: z.string().optional(), <br/>  ingredients: z.array(z.string()), <br/>  images: z.string().optional(), <br/>  source: z.string().optional(), <br/>});</pre> | Create new recipe |
