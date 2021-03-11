import * as types from '../../src/redux/constants/ActionTypes'
import * as SignUpActions from '../../src/redux/actions/SignUp.action'

describe('Auth Actions', () => {
  it('SetModalVisibility ', () => {
    const payload = true
    const result = {
      type: types.SIGN_UP_MODAL_VISIBILITY,
      payload
    }
    expect(SignUpActions.setModalVisibility(payload)).toEqual(result)
  })

  it('ChangeNewUser', () => {
    const value = {}
    const result = {
      type: types.CHANGE_NEW_USER,
      payload: value
    }
    expect(SignUpActions.changeNewUser(value)).toEqual(result)
  })

  it('SignUpStart ', () => {
    const result = {
      type: types.SIGN_UP_START
    }
    expect(SignUpActions.signUpStart()).toEqual(result)
  })

  it('SignUpSuccess ', () => {
    const value = {}
    const result = {
      type: types.SIGN_UP_SUCCESS,
      payload: value
    }
    expect(SignUpActions.signUpSuccess(value)).toEqual(result)
  })

  it('SignUpError ', () => {
    const value = {}
    const result = {
      type: types.SIGN_UP_ERROR,
      payload: value
    }
    expect(SignUpActions.signUpError(value)).toEqual(result)
  })

  it('SignUp', () => {
    const value = {}
    const result = {
      type: types.SIGN_UP,
      payload: value
    }
    expect(SignUpActions.signUp(value)).toEqual(result)
  })
})
