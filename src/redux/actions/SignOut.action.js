import * as types from '../constants/ActionTypes'

export const setModalVisibility = (payload) => ({
  type: types.SIGN_OUT_MODAL_VISIBILITY,
  payload
})

export const signOutStart = () => ({
  type: types.SIGN_OUT_START
})

export const signOutSuccess = (payload) => ({
  type: types.SIGN_OUT_SUCCESS,
  payload
})

export const signOutError = (payload) => ({
  type: types.SIGN_OUT_ERROR,
  payload
})

export const signOut = (payload) => ({
  type: types.SIGN_OUT,
  payload
})
