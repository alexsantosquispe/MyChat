import * as types from '../constants/ActionTypes'

export const fetchProfile = () => ({
  type: types.FETCH_PROFILE
})

export const setInitProfile = (payload) => ({
  type: types.SET_INIT_PROFILE,
  payload
})

export const loadingProfile = () => ({
  type: types.PROFILE_LOADING
})

export const profileSuccess = (payload) => ({
  type: types.PROFILE_SUCCESS,
  payload
})

export const profileError = (payload) => ({
  type: types.PROFILE_ERROR,
  payload
})
