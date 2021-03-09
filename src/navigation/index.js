import React from 'react'
import { AuthProvider } from './AuthProvider'
import Router from './Router'

const RootNavigation = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default RootNavigation
