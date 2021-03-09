import firestore from '@react-native-firebase/firestore'
import { generateNickName } from '../../utils'
import { USERS } from '../constants'

export const fetchUsers = () => {
  try {
    return new Promise((resolve, reject) => {
      firestore()
        .collection(USERS)
        .onSnapshot(
          (querySnapshot) => {
            const users = querySnapshot.docs.map((documentSnapshot) => {
              return {
                ...documentSnapshot.data()
              }
            })
            resolve({ success: true, result: users })
          },
          (error) => {
            reject({ success: false, error })
          }
        )
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchUserById = (id) => {
  try {
    return new Promise((resolve, reject) => {
      firestore()
        .collection(USERS)
        .where('authId', '==', id)
        .onSnapshot(
          (documentSnapshot) => {
            const user = documentSnapshot.docs.map((document) => ({
              ...document.data()
            }))
            resolve({ success: true, result: user[0] })
          },
          (error) => {
            reject({ success: false, error })
          }
        )
    })
  } catch (error) {
    console.log(error)
  }
}

export const createUser = async (payload) => {
  const { uid, email } = payload
  try {
    const users = firestore().collection(USERS)
    const newUser = {
      authId: uid,
      createdAt: firestore.FieldValue.serverTimestamp(),
      modifiedAt: firestore.FieldValue.serverTimestamp(),
      email,
      firstName: '',
      lastName: '',
      genre: '',
      nickName: generateNickName(email),
      status: true,
      urlPhoto: '',
      phoneNumber: ''
    }
    await users.add(newUser)
    return { success: true, result: newUser }
  } catch (error) {
    return { success: false, error }
  }
}

export const updateUser = async (payload) => {
  const {
    uid,
    firstName,
    lastName,
    nickName,
    urlPhoto,
    genre,
    phoneNumber
  } = payload
  try {
    const users = firestore().collection(USERS)
    const userModified = {
      firstName,
      lastName,
      genre,
      nickName,
      urlPhoto,
      phoneNumber,
      modifiedAt: firestore.FieldValue.serverTimestamp()
    }
    await users.doc(uid).update(userModified)
    return { success: true, result: userModified }
  } catch (error) {
    return { success: false, error }
  }
}

export const removeUser = async (payload) => {
  try {
    // remove user
    const users = firestore().collection(USERS)
  } catch (error) {
    console.log(error)
  }
}
