import AsynStorage from '@react-native-async-storage/async-storage'

export const saveData = async (key, value) => {
  try {
    if (key && value) {
      const jsonValue = JSON.stringify(value)
      await AsynStorage.setItem(key, jsonValue)
    }
  } catch (error) {
    console.log(error)
  }
}

export const getData = async (key) => {
  try {
    if (key) {
      const value = await AsynStorage.getItem(key)
      const result = value ? JSON.parse(value) : null
      return result
    }
  } catch (error) {
    console.log(error)
  }
  return null
}

export const removeData = async (key) => {
  try {
    if (key) {
      await AsynStorage.removeItem(key)
    }
  } catch (error) {
    console.log(error)
  }
}
