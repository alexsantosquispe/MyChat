import * as types from '../constants/ActionTypes'

const initialState = {
  modalVisibility: false,
  loading: false,
  success: true,
  error: null
}

const signOutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SIGN_OUT_MODAL_VISIBILITY:
      return {
        ...state,
        modalVisibility: payload
      }
    case types.SIGN_OUT_START:
      return {
        ...state,
        modalVisibility: true,
        loading: true
      }
    case types.SIGN_OUT_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: null
      }
    case types.SIGN_OUT_ERROR:
      return {
        ...state,
        success: false,
        loading: false,
        error: payload
      }
    default:
      return state
  }
}

export default signOutReducer
