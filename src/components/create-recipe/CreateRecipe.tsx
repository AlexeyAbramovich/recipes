import { useRef } from 'react'
import styles from './CreateRecipe.module.css'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'

export const CreateRecipe = () => {
  const nameInput = useRef<HTMLInputElement | null>(null)
  const imgInput = useRef<HTMLInputElement | null>(null)
  const [createRecipe] = useCreateRecipeMutation()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = nameInput.current?.value
    const img = imgInput.current?.value
    if (name && img) {
      createRecipe({
        name,
        img,
      })
      nameInput.current!!.value = ''
      imgInput.current!!.value = ''
    }
  }

  return (
    <form className={styles.createForm} onSubmit={handleSubmit}>
      <input
        className={styles.nameInput}
        ref={nameInput}
        type="text"
        placeholder="Название"
      />
      <input
        className={styles.imgInput}
        ref={imgInput}
        type="text"
        placeholder="Путь к картинке"
      />
      <button className={styles.createBtn} type="submit">
        Создать
      </button>
    </form>
  )
}
