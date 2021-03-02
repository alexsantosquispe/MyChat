import auth from '@react-native-firebase/auth'

export const login = async (payload) => {
  const { email, password } = payload
  try {
    await auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    console.log(error)
  }
}

export const register = async (payload) => {
  const { email, password } = payload
  try {
    await auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    console.log(error)
  }
}

export const logout = async () => {
  try {
    await auth().signOut()
  } catch (error) {
    console.log(error)
  }
}

export const getUserLogged = () => {
  let userLogged = null
  try {
    userLogged = auth().currentUser
  } catch (err) {
    userLogged = { err }
  }
  return userLogged
}
