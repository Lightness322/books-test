import { useState } from "react"

import { getBase64 } from "../utils/helpers"

export function useForm(addBook) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    image: "",
  })

  function handleSubmit(e) {
    e.preventDefault()
    addBook(book)

    setBook({
      title: "",
      author: "",
      image: "",
    })
  }

  function handleImageFile(e) {
    getBase64(e.target.files[0], (readerResult) =>
      setBook((book) => ({ ...book, image: readerResult }))
    )
  }

  function handleBookTitle(e) {
    setBook((book) => ({ ...book, title: e.target.value }))
  }

  function handleBookAuthor(e) {
    setBook((book) => ({ ...book, author: e.target.value }))
  }

  function resetImageInput(e) {
    e.target.value = null
  }

  return {
    book,
    setBook,
    handleSubmit,
    handleImageFile,
    handleBookTitle,
    handleBookAuthor,
    resetImageInput,
  }
}
