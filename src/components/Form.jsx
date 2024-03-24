import { useForm } from "../hooks/useForm"

import Button from "./UI/Button"

import style from "./Form.module.css"

export default function Form({ addBook }) {
  const {
    book,
    handleSubmit,
    handleImageFile,
    handleBookTitle,
    handleBookAuthor,
    resetImageInput,
  } = useForm(addBook)

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        <span className={style.upload}>
          {book.image ? "Обложка выбрана" : "Выбрать обложку"}
        </span>
        <input
          className={style.input_file}
          onClick={resetImageInput}
          onChange={handleImageFile}
          type="file"
        />
      </label>
      <label className={style.label}>
        <span className={style.label_name}>Название</span>
        <input
          className={style.input}
          value={book.title}
          onChange={handleBookTitle}
        />
      </label>
      <label className={style.label}>
        <span className={style.label_name}>Автор</span>
        <input
          className={style.input}
          value={book.author}
          onChange={handleBookAuthor}
        />
      </label>
      <Button
        disabled={!book.title.trim() || !book.author.trim()}
        color="green"
      >
        Добавить книгу
      </Button>
    </form>
  )
}
