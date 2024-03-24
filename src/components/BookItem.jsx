import { useBookItem } from "../hooks/useBookItem"

import Button from "./UI/Button"

import style from "./BookItem.module.css"

export default function BookItem({ book, deleteBook, updateBook }) {
  const {
    newBook,
    isShowButtons,
    isEditable,
    showButtons,
    hideButtons,
    handleImage,
    handleUpdateBook,
    handleDeleteBook,
    handleBookAuthor,
    handleBookTitle,
    makeItemEditable,
  } = useBookItem({ book, deleteBook, updateBook })

  return (
    <li
      className={style.book_item}
      onMouseEnter={showButtons}
      onMouseLeave={hideButtons}
    >
      <img
        className={style.book_img}
        src={book.image ? book.image : "empty.png"}
      />
      <div className={style.book_info}>
        {isShowButtons && !isEditable && (
          <div className={style.btns}>
            <Button onClick={makeItemEditable}>Изменить</Button>
            <Button color="red" onClick={handleDeleteBook}>
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
                onChange={handleImage}
                type="file"
              />
            </label>
            <Button color="green" onClick={handleUpdateBook}>
              Сохранить
            </Button>
          </div>
        )}
        {isEditable ? (
          <textarea
            className={style.input}
            rows={3}
            value={newBook.title}
            onChange={handleBookTitle}
          />
        ) : (
          <h3 className={style.book_title}>{book.title}</h3>
        )}
        {isEditable ? (
          <input
            className={style.input}
            value={newBook.author}
            onChange={handleBookAuthor}
          />
        ) : (
          <p className={style.book_author}>{book.author}</p>
        )}
      </div>
    </li>
  )
}
