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

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_USER: {
      return {
        ...state,
        parameters: payload
      }
    }
    case types.SIGN_IN_MODAL_VISIBILITY:
      return {
        ...state,
        modalVisibility: payload
      }
    case types.SIGN_IN_START:
      return {
        ...state,
        loading: true,
        modalVisibility: true
      }
    case types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        parameters: {
          email: '',
          password: ''
        },
        error: null
      }
    case types.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        parameters: {
          email: '',
          password: ''
        },
        modalVisibility: true,
        error: payload
      }
    default:
      return state
  }
}

export default authReducer
