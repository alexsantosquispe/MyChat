import { takeLatest, put, call } from 'redux-saga/effects'
import * as FirebaseUsers from '../../services/firebase/Users'
import * as ProfileActions from '../actions/Profile.action'
import * as LocalStorage from '../../services/localStorage'
import { USER_KEY } from '../../services/constants'
import * as types from '../constants/ActionTypes'

function* getCurrentProfile() {
  try {
    const currentUser = yield call(LocalStorage.getData, USER_KEY)
    if (currentUser) {
      yield put(ProfileActions.setInitProfile(currentUser))
    }
    yield put(ProfileActions.loadingProfile())
    if (currentUser) {
      const response = yield call(
        FirebaseUsers.fetchUserById,
        currentUser.authId
      )
      if (response.success) {
        yield put(ProfileActions.profileSuccess(response.result))
        yield call(LocalStorage.saveData, {
          ...currentUser,
          ...response.result
        })
      } else {
        yield put(ProfileActions.profileError(response.error))
      }
    }
  } catch (error) {
    yield put(ProfileActions.profileError(error))
  }
}

export function* fetchProfile() {
  yield takeLatest(types.FETCH_PROFILE, getCurrentProfile)
}
