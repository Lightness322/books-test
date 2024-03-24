import { useState } from "react"

import { getBase64 } from "../utils/helpers"

export function useBookItem({ book, updateBook, deleteBook }) {
  const [isShowButtons, setIsShowButtons] = useState(false)

  const [isEditable, setIsEditable] = useState(false)

  const [newBook, setNewBook] = useState({
    id: book.id,
    title: book.title,
    author: book.author,
    image: book.image,
  })

  function showButtons() {
    if (!isEditable) setIsShowButtons(true)
  }

  function hideButtons() {
    if (!isEditable) setIsShowButtons(false)
  }

  function handleImage(e) {
    getBase64(e.target.files[0], (readerResult) =>
      setNewBook((book) => ({ ...book, image: readerResult }))
    )
  }

  function handleUpdateBook() {
    setIsEditable(false)
    updateBook(newBook)
  }

  function handleDeleteBook() {
    deleteBook(book.id)
  }

  function handleBookAuthor(e) {
    setNewBook((newBook) => ({ ...newBook, author: e.target.value }))
  }

  function handleBookTitle(e) {
    setNewBook((newBook) => ({ ...newBook, title: e.target.value }))
  }

  function makeItemEditable() {
    setIsEditable(true)
  }

  return {
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
  }
}
