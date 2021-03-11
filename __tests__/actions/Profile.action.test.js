import * as types from '../../src/redux/constants/ActionTypes'
import * as ProfileActions from '../../src/redux/actions/Profile.action'

describe('Profile Actions', () => {
  it('fetchProfile ', () => {
    const result = {
      type: types.FETCH_PROFILE
    }
    expect(ProfileActions.fetchProfile()).toEqual(result)
  })

  it('setInitProfile', () => {
    const value = {}
    const result = {
      type: types.SET_INIT_PROFILE,
      payload: value
    }
    expect(ProfileActions.setInitProfile(value)).toEqual(result)
  })

  it('loadingProfile ', () => {
    const result = {
      type: types.PROFILE_LOADING
    }
    expect(ProfileActions.loadingProfile()).toEqual(result)
  })

  it('profileSuccess ', () => {
    const value = {}
    const result = {
      type: types.PROFILE_SUCCESS,
      payload: value
    }
    expect(ProfileActions.profileSuccess(value)).toEqual(result)
  })

  it('profileError ', () => {
    const value = {}
    const result = {
      type: types.PROFILE_ERROR,
      payload: value
    }
    expect(ProfileActions.profileError(value)).toEqual(result)
  })
})
