export type Recipe = {
  id: string
  name: string
  img: string
}

export type RecipeData = Omit<Recipe, 'id'>
