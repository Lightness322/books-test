export function updateLocalStorage(key, object) {
  window.localStorage.setItem(key, JSON.stringify(object))
}
