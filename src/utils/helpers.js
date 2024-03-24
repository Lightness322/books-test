export function updateLocalStorage(key, object) {
  window.localStorage.setItem(key, JSON.stringify(object))
}

export function getBase64(file, callback) {
  const reader = new FileReader()
  reader.readAsDataURL(file)

  reader.onload = function () {
    callback(reader.result)
  }
  reader.onerror = function (error) {
    console.log(error)
  }

  return reader
}
