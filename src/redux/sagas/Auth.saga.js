import { call, put, takeLatest } from 'redux-saga/effects'
import * as Actions from '../actions/Auth.action'
import * as types from '../constants/ActionTypes'

function* login(email, password) {
  alert(`${email} ${password}`)
}

function* signIn() {
  yield takeLatest(types.SIGN_IN, login)
}

export default signIn
