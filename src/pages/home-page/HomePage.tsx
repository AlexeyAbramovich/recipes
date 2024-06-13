import { CreateRecipe } from '../../components/create-recipe/CreateRecipe'
import { RecipeItem } from '../../components/recipe-item/RecipeItem'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useGetRecipesQuery } from '../../store/api/api'

export const HomePage = () => {
  const searchValue = useTypedSelector((state) => state.search)
  const { isLoading, data, error } = useGetRecipesQuery(searchValue)
  console.log(data)
  return (
    <>
      {error ? (
        <div className="error">
          <h3>Ошибка при загрузке данных</h3>
        </div>
      ) : isLoading ? (
        <div className="loading">
          <h3>Загрузка...</h3>
        </div>
      ) : data ? (
        <>
          <CreateRecipe />
          <div className="recipes">
            {data.map((r) => (
              <RecipeItem key={r.id} recipe={r} />
            ))}
          </div>
        </>
      ) : (
        <div className="not-found">
          <h3>Рецепты не найдены</h3>
        </div>
      )}
    </>
  )
}
