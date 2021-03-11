import * as types from '../../src/redux/constants/ActionTypes'
import * as AuthActions from '../../src/redux/actions/Auth.action'

describe('Auth Actions', () => {
  it('setModalVisibility ', () => {
    const payload = true
    const result = {
      type: types.SIGN_IN_MODAL_VISIBILITY,
      payload
    }
    expect(AuthActions.setModalVisibility(payload)).toEqual(result)
  })

  it('changeUser', () => {
    const value = {}
    const result = {
      type: types.CHANGE_USER,
      payload: value
    }
    expect(AuthActions.changeUser(value)).toEqual(result)
  })

  it('signInStart ', () => {
    const result = {
      type: types.SIGN_IN_START
    }
    expect(AuthActions.signInStart()).toEqual(result)
  })

  it('SignInSuccess ', () => {
    const value = {}
    const result = {
      type: types.SIGN_IN_SUCCESS,
      payload: value
    }
    expect(AuthActions.signInSuccess(value)).toEqual(result)
  })

  it('SignInError ', () => {
    const value = {}
    const result = {
      type: types.SIGN_IN_ERROR,
      payload: value
    }
    expect(AuthActions.signInError(value)).toEqual(result)
  })

  it('SignIn', () => {
    const value = {}
    const result = {
      type: types.SIGN_IN,
      payload: value
    }
    expect(AuthActions.signIn(value)).toEqual(result)
  })
})
