import * as types from '../constants/ActionTypes'

export const setModalVisibility = (payload) => ({
  type: types.SIGN_UP_MODAL_VISIBILITY,
  payload
})

export const changeNewUser = (payload) => ({
  type: types.CHANGE_NEW_USER,
  payload
})

export const signUpStart = () => ({
  type: types.SIGN_UP_START
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
