import * as types from '../../src/redux/constants/ActionTypes'
import ProfileReducer from '../../src/redux/reducers/Profile.reducer'

describe('Auth Reducer', () => {
  const initialState = {
    user: {
      uid: '',
      email: '',
      nickName: '',
      status: true,
      urlPhoto: ''
    },
    loading: false,
    error: null
  }

  it('Initial state', () => {
    expect(ProfileReducer(undefined, {})).toEqual(initialState)
  })

  it('Profile Init', () => {
    const payload = {}
    const newState = {
      user: payload,
      loading: false,
      error: null
    }
    expect(
      ProfileReducer(undefined, { type: types.SET_INIT_PROFILE, payload })
    ).toEqual(newState)
  })

  it('Profile Loading', () => {
    const newState = {
      user: {
        uid: '',
        email: '',
        nickName: '',
        status: true,
        urlPhoto: ''
      },
      loading: true,
      error: null
    }
    expect(ProfileReducer(undefined, { type: types.PROFILE_LOADING })).toEqual(
      newState
    )
  })

  it('Profile Success', () => {
    const payload = {}
    const newState = {
      user: payload,
      loading: false,
      error: null
    }
    expect(
      ProfileReducer(undefined, { type: types.PROFILE_SUCCESS, payload })
    ).toEqual(newState)
  })

  it('Profile Error', () => {
    const payload = {}
    const newState = {
      user: {
        uid: '',
        email: '',
        nickName: '',
        status: true,
        urlPhoto: ''
      },
      loading: true,
      error: payload
    }
    expect(
      ProfileReducer(undefined, { type: types.PROFILE_ERROR, payload })
    ).toEqual(newState)
  })
})
