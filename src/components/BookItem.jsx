import { useState } from "react"

import Button from "./UI/Button"

import style from "./BookItem.module.css"

export default function BookItem({ book, deleteBook, updateBook }) {
  const [isShowButtons, setIsShowButtons] = useState(false)

  const [isEditable, setIsEditable] = useState(false)

  const [newBook, setNewBook] = useState({
    id: book.id,
    title: book.title,
    author: book.author,
    image: book.image,
  })

  function getBase64(file) {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = function () {
      setNewBook((book) => ({ ...book, image: reader.result }))
    }
    reader.onerror = function (error) {
      console.log(error)
    }
  }

  return (
    <li
      className={style.book_item}
      onMouseEnter={() => {
        if (!isEditable) setIsShowButtons(true)
      }}
      onMouseLeave={() => {
        if (!isEditable) setIsShowButtons(false)
      }}
    >
      <img
        className={style.book_img}
        src={book.image ? book.image : "empty.png"}
      />
      <div className={style.book_info}>
        {isShowButtons && !isEditable && (
          <div className={style.btns}>
            <Button onClick={() => setIsEditable(true)}>Изменить</Button>
            <Button color="red" onClick={() => deleteBook(book.id)}>
              Удалить
            </Button>
          </div>
        )}
        {isShowButtons && isEditable && (
          <div className={style.btns}>
            <label>
              <span className={style.upload}>Обложка</span>
              <input
                className={style.input_file}
                onChange={(e) => getBase64(e.target.files[0])}
                type="file"
              />
            </label>
            <Button
              color="green"
              onClick={() => {
                setIsEditable(false)
                updateBook(newBook)
              }}
            >
              Сохранить
            </Button>
          </div>
        )}
        {isEditable ? (
          <textarea
            className={style.input}
            rows={3}
            value={newBook.title}
            onChange={(e) =>
              setNewBook((newBook) => ({ ...newBook, title: e.target.value }))
            }
          />
        ) : (
          <h3 className={style.book_title}>{book.title}</h3>
        )}
        {isEditable ? (
          <input
            className={style.input}
            value={newBook.author}
            onChange={(e) =>
              setNewBook((newBook) => ({ ...newBook, author: e.target.value }))
            }
          />
        ) : (
          <p className={style.book_author}>{book.author}</p>
        )}
      </div>
    </li>
  )
}
