import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'
import * as LocalStorage from '../services/localStorage'
import { USER_KEY } from '../services/constants'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

const Router = () => {
  const { user, setUser } = useContext(AuthContext)
  const [initializing, setInitializing] = useState(true)

  const saveUser = async (user) => {
    await LocalStorage.saveData(USER_KEY, {
      authId: user.uid,
      email: user.email
    })
  }

  const removeUser = async () => {
    await LocalStorage.removeData(USER_KEY)
  }

  const onAuthStateChanged = (result) => {
    result ? saveUser(result) : removeUser()
    setUser(result)
    if (initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) return null

  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Router
