import { RecipeItem } from '../../components/recipe-item/RecipeItem'
import { useFavorites } from '../../hooks/useFavorites'

export const FavoritesPage = () => {
  const favorites = useFavorites()
  return (
    <>
      {favorites.length > 0 ? (
        <div className="recipes">
          {favorites.map((r) => (
            <RecipeItem key={r.id} recipe={r} />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <h3>Избранные рецепты не найдены</h3>
        </div>
      )}
    </>
  )
}
