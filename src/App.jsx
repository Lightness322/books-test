import { useBooks } from "./hooks/useBooks"

import Form from "./components/Form"
import BookItem from "./components/BookItem"

import style from "./App.module.css"

function App() {
  const { books, addBook, deleteBook, updateBook } = useBooks()

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.container}>
          <span>BOOKS</span>
        </div>
      </header>
      <main className={style.content}>
        <div className={style.container}>
          <Form addBook={addBook} />
          {books.length === 0 ? (
            <p className={style.empty}>Список книг пуст</p>
          ) : (
            <ul className={style.book_list}>
              {books.map((book) => (
                <BookItem
                  key={book.id}
                  book={book}
                  deleteBook={deleteBook}
                  updateBook={updateBook}
                />
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
