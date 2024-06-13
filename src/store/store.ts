import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as favoritesReducer } from './favorites.slice'
import { reducer as searchReducer } from './search.slice'
import { api } from './api/api'

// combineReducers() используется, чтобы соединить все редюсеры в один
// и не прописывать в store каждый редюсер отдельно
const reducers = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
  [api.reducerPath]: api.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
