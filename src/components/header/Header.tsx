import { FaHeart } from 'react-icons/fa6'
import { useFavorites } from '../../hooks/useFavorites'
import { useLocation, useNavigate } from 'react-router-dom'
import { Search } from '../search/Search'
import styles from './Header.module.css'

const Header = () => {
  const favorites = useFavorites()
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (location.pathname === '/') navigate('/favorites')
    else navigate('/')
  }

  return (
    <header className={styles.header}>
      <h2 className={styles.title}>
        {location.pathname === '/favorites' ? 'Избранное' : 'Рецепты'}
      </h2>
      <div className={styles.headerWrapper}>
        <Search />
        <div className={styles.favorites}>
          <FaHeart onClick={handleClick} />
          {favorites.length > 0 && (
            <div className={styles.quantity}>
              <span>{favorites.length}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
