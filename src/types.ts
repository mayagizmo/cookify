export interface ApiRecipe {
  title: string;
  prepTime: number;
  cookingTime: number;
  id: number;
  instructions: string;
  ingredients: Array<string>;
}
