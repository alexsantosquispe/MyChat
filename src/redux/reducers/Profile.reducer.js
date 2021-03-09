import * as types from '../constants/ActionTypes'

const initialState = {
  user: {
    uid: '',
    email: '',
    nickName: '',
    status: true,
    urlPhoto: ''
  },
  loading: false,
  error: null
}

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SET_INIT_PROFILE:
      return {
        ...state,
        user: payload
      }
    case types.PROFILE_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.PROFILE_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: null
      }
    case types.PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: true
      }
    default:
      return state
  }
}

export default profileReducer
