import * as types from '../../src/redux/constants/ActionTypes'
import SignUpReducer from '../../src/redux/reducers/SignUp.reducer'

describe('Auth Reducer', () => {
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
  it('Initial state', () => {
    expect(SignUpReducer(undefined, {})).toEqual(initialState)
  })

  it('Change New User', () => {
    const payload = {
      email: 'email@test.com',
      password: '123'
    }
    const newState = {
      parameters: payload,
      user: null,
      loading: false,
      modalVisibility: false,
      error: null
    }
    expect(
      SignUpReducer(undefined, { type: types.CHANGE_NEW_USER, payload })
    ).toEqual(newState)
  })

  it('Set Modal Visibility', () => {
    const payload = true
    const newState = {
      parameters: {
        email: '',
        password: ''
      },
      user: null,
      loading: false,
      modalVisibility: payload,
      error: null
    }
    expect(
      SignUpReducer(undefined, {
        type: types.SIGN_UP_MODAL_VISIBILITY,
        payload
      })
    ).toEqual(newState)
  })

  it('SignUp Start', () => {
    const payload = true
    const newState = {
      parameters: {
        email: '',
        password: ''
      },
      user: null,
      loading: true,
      modalVisibility: true,
      error: null
    }
    expect(
      SignUpReducer(undefined, { type: types.SIGN_UP_START, payload })
    ).toEqual(newState)
  })

  it('SignUp Success', () => {
    const payload = {}
    const newState = {
      parameters: {
        email: '',
        password: ''
      },
      user: payload,
      loading: false,
      modalVisibility: false,
      error: null
    }
    expect(
      SignUpReducer(undefined, { type: types.SIGN_UP_SUCCESS, payload })
    ).toEqual(newState)
  })

  it('SignUp Error', () => {
    const payload = {}
    const newState = {
      error: payload,
      loading: false,
      modalVisibility: false,
      parameters: {
        email: '',
        password: ''
      },
      user: null
    }
    expect(
      SignUpReducer(undefined, { type: types.SIGN_UP_ERROR, payload })
    ).toEqual(newState)
  })
})
