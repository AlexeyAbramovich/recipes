import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Recipe } from '../types/recipe.types'

const initialState: Recipe[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleRecipe: (state, { payload: recipe }: PayloadAction<Recipe>) => {
      const isExist = state.some((r) => r.id === recipe.id)
      if (isExist) return state.filter((r) => r.id !== recipe.id)
      state.push(recipe)
    },
  },
})

export const { actions, reducer } = favoritesSlice
