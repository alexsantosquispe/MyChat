import * as types from '../constants/ActionTypes'

const initialState = {
  parameters: {
    email: '',
    password: ''
  },
  user: null,
  loading: false,
  modalVisibility: false,
  error: null
}

const signUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_NEW_USER: {
      return {
        ...state,
        parameters: payload
      }
    }
    case types.SIGN_UP_MODAL_VISIBILITY:
      return {
        ...state,
        modalVisibility: payload
      }
    case types.SIGN_UP_START:
      return {
        ...state,
        loading: true,
        modalVisibility: true
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        parameters: {
          email: '',
          password: ''
        },
        modalVisibility: false,
        error: null
      }
    case types.SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        parameters: {
          email: '',
          password: ''
        },
        error: payload
      }
    default:
      return state
  }
}

export default signUpReducer
