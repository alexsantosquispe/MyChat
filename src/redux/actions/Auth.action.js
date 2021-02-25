import * as types from '../constants/ActionTypes'

export const signInStart = (payload) => ({
  type: types.SIGN_IN_START,
  payload
})

export const signInSuccess = (payload) => ({
  type: types.SIGN_IN_SUCCESS,
  payload
})

export const signIn = (payload) => ({
  type: types.SIGN_IN_ERROR,
  payload
})
