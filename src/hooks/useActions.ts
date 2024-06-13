import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actions as favoritesActions } from '../store/favorites.slice'
import { actions as searchActions } from '../store/search.slice'

const rootActions = {
  ...favoritesActions,
  ...searchActions,
}

// кастомный хук для изменения стейта, избавляет от постоянного вызова useDispatch(),
// так как связывает все экшены в один рутовый и привязывает dispatch к рутовому экшену.
// Работа с хуком простая - просто вызываем хук, делаем деструктуризацию и извлекаем нужный экшн для изменения стейта
export default function useActions() {
  const dispatch = useDispatch()
  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
