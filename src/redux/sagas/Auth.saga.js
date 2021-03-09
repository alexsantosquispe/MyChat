import { call, put, takeLatest } from 'redux-saga/effects'
import * as FirebaseAuth from '../../services/firebase/Auth'
import * as FirebaseUsers from '../../services/firebase/Users'
import * as LocalStorage from '../../services/localStorage'
import { USER_KEY } from '../../services/constants'
import * as AuthActions from '../actions/Auth.action'
import * as SignUpActions from '../actions/SignUp.action'
import * as SignOutActions from '../actions/SignOut.action'
import * as types from '../constants/ActionTypes'

function* firebaseLogin({ payload }) {
  yield put(AuthActions.signInStart())
  try {
    const response = yield call(FirebaseAuth.login, payload)

    if (response.success) {
      const { user } = response.result
      yield put(AuthActions.signInSuccess(user))
    } else {
      const { error } = response
      yield put(AuthActions.signInError(error.code))
    }
  } catch (error) {
    yield put(AuthActions.signInError(error))
  }
}

function* firebaseSignUp({ payload }) {
  yield put(SignUpActions.signUpStart())
  try {
    const response = yield call(FirebaseAuth.register, payload)

    if (response.success) {
      const { user } = response.result
      yield call(FirebaseAuth.sendEmailVerification)

      const { success, result } = yield call(FirebaseUsers.createUser, user)
      if (success) {
        yield call(LocalStorage.saveData, USER_KEY, result)
      }
      yield put(SignUpActions.signUpSuccess(user))
    } else {
      const { error } = response
      yield put(SignUpActions.signUpError(error.code))
    }
  } catch (error) {
    yield put(SignUpActions.signUpError(error))
  }
}

function* firebaseSignOut() {
  yield put(SignOutActions.signOutStart())
  try {
    const response = yield call(FirebaseAuth.logout)

    if (response.success) {
      yield put(SignOutActions.signOutSuccess(response.success))
      yield call(LocalStorage.removeData, USER_KEY)
    } else {
      const { error } = response
      yield put(SignOutActions.signOutError(error.code))
    }
  } catch (error) {
    yield put(SignOutActions.signOutError(error))
  }
}

export function* signIn() {
  yield takeLatest(types.SIGN_IN, firebaseLogin)
}

export function* signUp() {
  yield takeLatest(types.SIGN_UP, firebaseSignUp)
}

export function* signOut() {
  yield takeLatest(types.SIGN_OUT, firebaseSignOut)
}
