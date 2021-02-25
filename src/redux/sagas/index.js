import { all } from 'redux-saga/effects'
import { default as signIn } from './Auth.saga'

export default function* rootSaga() {
  yield all([signIn()])
}
