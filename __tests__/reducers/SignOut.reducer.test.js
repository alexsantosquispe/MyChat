import * as types from '../../src/redux/constants/ActionTypes'
import SignOutReducer from '../../src/redux/reducers/SignOut.reducer'

describe('Auth Reducer', () => {
  const initialState = {
    modalVisibility: false,
    loading: false,
    success: true,
    error: null
  }
  it('Initial state', () => {
    expect(SignOutReducer(undefined, {})).toEqual(initialState)
  })

  it('Set Modal Visibility', () => {
    const payload = true
    const newState = {
      modalVisibility: payload,
      loading: false,
      success: true,
      error: null
    }
    expect(
      SignOutReducer(undefined, {
        type: types.SIGN_OUT_MODAL_VISIBILITY,
        payload
      })
    ).toEqual(newState)
  })

  it('SignUp Start', () => {
    const newState = {
      modalVisibility: true,
      loading: true,
      success: true,
      error: null
    }
    expect(SignOutReducer(undefined, { type: types.SIGN_OUT_START })).toEqual(
      newState
    )
  })

  it('SignUp Success', () => {
    const payload = {}
    const newState = {
      modalVisibility: false,
      loading: false,
      success: true,
      error: null
    }
    expect(
      SignOutReducer(undefined, { type: types.SIGN_OUT_SUCCESS, payload })
    ).toEqual(newState)
  })

  it('SignUp Error', () => {
    const payload = {}
    const newState = {
      modalVisibility: false,
      loading: false,
      success: false,
      error: payload
    }
    expect(
      SignOutReducer(undefined, { type: types.SIGN_OUT_ERROR, payload })
    ).toEqual(newState)
  })
})
