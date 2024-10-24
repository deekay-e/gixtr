const useLocalStorage = (key, type) => {
  try {
    if (type === 'get') {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : ''
    }
    if (type === 'set') {
      const setValue = (newValue) => {
        window.localStorage.setItem(key, JSON.stringify(newValue))
      }
      return [setValue]
    }
    if (type === 'delete') {
      const deleteItem = () => {
        window.localStorage.removeItem(key)
      }
      return [deleteItem]
    }
  } catch (error) {
    console.log(error)
  }
}

export default useLocalStorage