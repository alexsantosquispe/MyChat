import * as types from '../../src/redux/constants/ActionTypes'
import AuthReducer from '../../src/redux/reducers/Auth.reducer'

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
    expect(AuthReducer(undefined, {})).toEqual(initialState)
  })

  it('Change User', () => {
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
      AuthReducer(undefined, { type: types.CHANGE_USER, payload })
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
      AuthReducer(undefined, { type: types.SIGN_IN_MODAL_VISIBILITY, payload })
    ).toEqual(newState)
  })

  it('SignIn Start', () => {
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
      AuthReducer(undefined, { type: types.SIGN_IN_START, payload })
    ).toEqual(newState)
  })

  it('SignIn Success', () => {
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
      AuthReducer(undefined, { type: types.SIGN_IN_SUCCESS, payload })
    ).toEqual(newState)
  })

  it('SignIn Error', () => {
    const payload = {}
    const newState = {
      parameters: {
        email: '',
        password: ''
      },
      user: null,
      loading: false,
      modalVisibility: true,
      error: payload
    }
    expect(
      AuthReducer(undefined, { type: types.SIGN_IN_ERROR, payload })
    ).toEqual(newState)
  })
})
