import auth from '@react-native-firebase/auth'

/**
 * Calls to firebase login passing email and password
 * @param {object} payload - Object with email and password properties
 * @returns {object} {success: true/false, error: 'error message', result: data}
 */
export const login = async (payload) => {
  const { email, password } = payload
  try {
    const response = await auth().signInWithEmailAndPassword(email, password)
    return { success: true, result: response }
  } catch (error) {
    return { success: false, error }
  }
}

/**
 * Calls to firebase sign up method passing the arguments
 * @param {object} payload - Object with email and password properties
 * @returns {object} {success: true/false, error: 'error message', result: data}
 */
export const register = async (payload) => {
  const { email, password } = payload
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password
    )
    return { success: true, result: response }
  } catch (error) {
    return { success: false, error }
  }
}

/**
 * Calls to log out firebase's method
 * @returns {object} {success: true/false, error: 'error message'}
 */
export const logout = async () => {
  try {
    await auth().signOut()
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

/**
 * Gets the current user logged
 * @returns {object}
 */
export const getUserLogged = () => {
  let userLogged = null
  try {
    userLogged = auth().currentUser
  } catch (error) {
    userLogged = { error }
  }
  return userLogged
}

/**
 * Calls to sendEmailVerification firebase's method
 */
export const sendEmailVerification = async () => {
  try {
    const userLogged = auth().currentUser
    await userLogged.sendEmailVerification()
  } catch (error) {
    console.log(error)
  }
}
