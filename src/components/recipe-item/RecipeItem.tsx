import { FaHeart } from 'react-icons/fa6'
import { FaRegHeart } from 'react-icons/fa6'
import { Recipe } from '../../types/recipe.types'
import styles from './RecipeItem.module.css'
import { useFavorites } from '../../hooks/useFavorites'
import useActions from '../../hooks/useActions'

type RecipeItem = {
  recipe: Recipe
}

export const RecipeItem = ({ recipe }: RecipeItem) => {
  const favorites = useFavorites()
  const isFavorite = favorites.some((r) => r.id === recipe.id)
  const { toggleRecipe } = useActions()

  const handleClick = () => {
    toggleRecipe(recipe)
  }

  return (
    <div className={styles.recipeItem}>
      <img src={recipe.img} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <div className={styles.favoritesIconWrapper} onClick={handleClick}>
        {isFavorite ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  )
}
