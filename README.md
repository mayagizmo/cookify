# Cookify

Cookify is an app which helps you to keep track of all your favorite recipes. Furthermore, it features your most cooked dishes and reminds you of the long forgotten but once loved foods that deserve some attention.

## Features
- Add a new recipe to the database
- View Recipes in 3 different categories (e.g. "recently cooked")
- Detailed view for each recipe

## Development
This project uses 
- React
-  DaisyUI
-   TanStack Router
-   vite

## TODO

This project is still under construction and more and more features are gradually added.

## APIs
New API Endpoint: `https://cookify-backend.windesign.workers.dev/`

Endpoints:
| Method | Path | Params | Description |
| - | - | - | - |
| GET | /recipes | - | Returns a list of recipes |
| GET | /recipes/:recipeId | `recipeId` should be the ID (`number`) of the recipe | Returns a single recipe by ID |
| POST | /recipes | <pre>z.object({<br/>  title: z.string(), <br/>  prepTime: z.number(), <br/>  cookingTime: z.number(), <br/>  instructions: z.string().optional(), <br/>  ingredients: z.array(z.string()), <br/>  images: z.string().optional(), <br/>  source: z.string().optional(), <br/>});</pre> | Create new recipe |
