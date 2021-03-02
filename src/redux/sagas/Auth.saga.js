import { call, put, takeLatest } from 'redux-saga/effects'
import * as FirebaseAuth from '../../services/firebase/Auth'
import * as AuthActions from '../actions/Auth.action'
import * as types from '../constants/ActionTypes'

function* loginWithFirebase({ payload }) {
  try {
    yield put(AuthActions.signInStart(true))
    yield call(FirebaseAuth.login, payload)
    const currentUser = yield call(FirebaseAuth.getUserLogged)

    if (currentUser) {
      yield put(AuthActions.signInSuccess(currentUser))
    } else {
      yield put(AuthActions.signInError({ error: 'error login' }))
    }
  } catch (err) {
    debugger
    yield put(AuthActions.signInError(err))
  }
}

function* signIn() {
  yield takeLatest(types.SIGN_IN, loginWithFirebase)
}

export default signIn
