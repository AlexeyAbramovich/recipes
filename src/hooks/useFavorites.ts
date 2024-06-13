import { useTypedSelector } from './useTypedSelector'

export const useFavorites = () => {
  return useTypedSelector((state) => state.favorites)
}