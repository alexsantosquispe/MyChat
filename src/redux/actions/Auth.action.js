import * as types from '../constants/ActionTypes'

export const setModalVisibility = (payload) => ({
  type: types.SIGN_IN_MODAL_VISIBILITY,
  payload
})

export const changeUser = (payload) => ({
  type: types.CHANGE_USER,
  payload
})

export const signInStart = () => ({
  type: types.SIGN_IN_START
})

export const signInSuccess = (payload) => ({
  type: types.SIGN_IN_SUCCESS,
  payload
})

export const signInError = (payload) => ({
  type: types.SIGN_IN_ERROR,
  payload
})

export const signIn = (payload) => ({
  type: types.SIGN_IN,
  payload
})
