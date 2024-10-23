const useSessionStorage = (key, type) => {
  try {
    if (type === 'get') {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : ''
    }
    if (type === 'set') {
      const setValue = (newValue) => {
        window.sessionStorage.setItem(key, JSON.stringify(newValue))
      }
      return [setValue]
    }
    if (type === 'delete') {
      const deleteItem = () => {
        window.sessionStorage.removeItem(key)
      }
      return [deleteItem]
    }
  } catch (error) {
    console.log(error)
  }
}

export default useSessionStorage