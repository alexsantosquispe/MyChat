import * as types from '../../src/redux/constants/ActionTypes'
import * as SignoutActions from '../../src/redux/actions/SignOut.action'

describe('Auth Actions', () => {
  it('SetModalVisibility ', () => {
    const payload = true
    const result = {
      type: types.SIGN_OUT_MODAL_VISIBILITY,
      payload
    }
    expect(SignoutActions.setModalVisibility(payload)).toEqual(result)
  })

  it('SignOutStart ', () => {
    const result = {
      type: types.SIGN_OUT_START
    }
    expect(SignoutActions.signOutStart()).toEqual(result)
  })

  it('SignOutSuccess ', () => {
    const value = {}
    const result = {
      type: types.SIGN_OUT_SUCCESS,
      payload: value
    }
    expect(SignoutActions.signOutSuccess(value)).toEqual(result)
  })

  it('SignOutError ', () => {
    const value = {}
    const result = {
      type: types.SIGN_OUT_ERROR,
      payload: value
    }
    expect(SignoutActions.signOutError(value)).toEqual(result)
  })

  it('SignIn', () => {
    const value = {}
    const result = {
      type: types.SIGN_OUT,
      payload: value
    }
    expect(SignoutActions.signOut(value)).toEqual(result)
  })
})
