import { useState } from "react"

import Button from "./UI/Button"

import style from "./Form.module.css"

export default function Form({ addBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    setBook({
      title: "",
      author: "",
      image: "",
    })
  }

  function getBase64(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = function () {
      setBook((book) => ({ ...book, image: reader.result }))
    }
    reader.onerror = function (error) {
      console.log(error)
    }
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        <span className={style.upload}>
          {book.image ? "Обложка выбрана" : "Выбрать обложку"}
        </span>
        <input
          className={style.input_file}
          onClick={(e) => (e.target.value = null)}
          onChange={(e) => {
            getBase64(e.target.files[0])
          }}
          type="file"
        />
      </label>
      <label className={style.label}>
        <span className={style.label_name}>Название</span>
        <input
          className={style.input}
          value={book.title}
          onChange={(e) =>
            setBook((book) => ({ ...book, title: e.target.value }))
          }
        />
      </label>
      <label className={style.label}>
        <span className={style.label_name}>Автор</span>
        <input
          className={style.input}
          value={book.author}
          onChange={(e) =>
            setBook((book) => ({ ...book, author: e.target.value }))
          }
        />
      </label>
      <Button
        disabled={!book.title.trim() || !book.author.trim()}
        onClick={() => addBook(book)}
        color="green"
      >
        Добавить книгу
      </Button>
    </form>
  )
}
