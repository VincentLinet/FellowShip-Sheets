import * as React from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"

const useStorage = (key, initialValue, locked = false) => {
  const [storedValue, setStoredValue] = React.useState(initialValue)

  React.useEffect(() => {
    const init = async () => {
      const value = await getItem(key)

      const parsed = JSON.parse(value) || initialValue
      setStoredValue(parsed)
    }
    init()
  }, [initialValue, key])

  const setValue = async (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    if (value !== undefined) {
      await setItem(key, JSON.stringify(valueToStore))
    } else {
      await removeItem(key)
    }

    setStoredValue(valueToStore)
  }

  return [storedValue, setValue]
}

const getItem = async (key) => AsyncStorage.getItem(key)

const setItem = async (key, value) => AsyncStorage.setItem(key, value)

const removeItem = async (key) => AsyncStorage.removeItem(key)

export default useStorage
