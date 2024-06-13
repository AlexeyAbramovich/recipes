import { useState } from 'react'
import useActions from '../../hooks/useActions'
import styles from './Search.module.css'

export const Search = () => {
  const [inputValue, setInputValue] = useState('')
  const { setSearchValue } = useActions()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    setSearchValue(inputValue)
  }

  return (
    <div className={styles.searchWrapper}>
      <input
        type="search"
        className={styles.searchInput}
        placeholder="🔎"
        onChange={handleChange}
      />
      <button className={styles.searchButton} onClick={handleClick}>
        Найти
      </button>
    </div>
  )
}
