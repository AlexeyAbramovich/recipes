import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Recipe } from '../../types/recipe.types'

const API_URL = 'http://localhost:4200/recipes'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Recipe'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getRecipes: builder.query<Recipe[], string>({
      query: (searchValue) => `?q=${searchValue}`,
      providesTags: (result, error, searchValue) => [
        {
          type: 'Recipe',
          id: searchValue,
        },
      ],
    }),
  }),
})

export const { useGetRecipesQuery } = api
