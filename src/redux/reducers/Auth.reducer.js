import * as types from '../constants/ActionTypes'

const initialState = {
  user: {
    email: '',
    password: '',
    repeatedPassword: ''
  },
  loading: false,
  error: null
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_USER: {
      return {
        ...state,
        user: payload
      }
    }
    case types.SIGN_IN_START:
      return {
        ...state,
        loading: payload
      }
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null
      }
    case types.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default authReducer
