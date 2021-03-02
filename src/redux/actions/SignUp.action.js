import * as types from '../constants/ActionTypes'

export const changeNewUser = (payload) => ({
  type: types.CHANGE_NEW_USER,
  payload
})

export const signUpStart = (payload) => ({
  type: types.SIGN_UP_START,
  payload
})

export const signUpSuccess = (payload) => ({
  type: types.SIGN_UP_SUCCESS,
  payload
})

export const signUpError = (payload) => ({
  type: types.SIGN_UP_ERROR,
  payload
})

export const signUp = (payload) => ({
  type: types.SIGN_UP,
  payload
})
