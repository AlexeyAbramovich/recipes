import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/store'

// кастомный хук для типизации useSelector, избавляет в дальейшем от прописывания RootState каждый раз, так как стейт
// уже будет типизирован - useSelector(state: RootState => state.favorites)
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
