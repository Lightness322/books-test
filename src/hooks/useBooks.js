import { useState } from "react"
import { updateLocalStorage } from "../utils/helpers"

const LOCAL_STORAGE_KEY = "books"

function initLocalStorage() {
  const initialBooks = window.localStorage.getItem(LOCAL_STORAGE_KEY)

  if (initialBooks === null) {
    updateLocalStorage(LOCAL_STORAGE_KEY, [])
    return []
  } else {
    return JSON.parse(initialBooks)
  }
}

export function useBooks() {
  const [books, setBooks] = useState(() => initLocalStorage())

  function addBook(newBook) {
    newBook = {
      id: Math.round(Math.random() * 100000),
      title: newBook.title.trim(),
      author: newBook.author.trim(),
      image: newBook.image,
    }

    setBooks((books) => [...books, newBook])

    updateLocalStorage(LOCAL_STORAGE_KEY, [...books, newBook])
  }

  function deleteBook(bookId) {
    const newBooks = books.filter((book) => book.id !== bookId)

    setBooks(newBooks)

    updateLocalStorage(LOCAL_STORAGE_KEY, newBooks)
  }

  function updateBook(updatedBook) {
    const newBooks = books.map((book) => {
      if (updatedBook.id !== book.id) {
        return book
      } else {
        return updatedBook
      }
    })

    setBooks(newBooks)

    updateLocalStorage(LOCAL_STORAGE_KEY, newBooks)
  }

  return { books, setBooks, addBook, deleteBook, updateBook }
}
