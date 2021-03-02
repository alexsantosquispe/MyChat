import * as types from '../constants/ActionTypes'

const initialState = {
  user: {
    email: '',
    password: ''
  },
  loading: false,
  error: null
}

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_NEW_USER: {
      return {
        ...state,
        user: payload
      }
    }
    case types.SIGN_UP_START:
      return {
        ...state,
        loading: payload
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null
      }
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default signUpReducer
