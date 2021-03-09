import { all } from 'redux-saga/effects'
import { signIn, signUp, signOut } from './Auth.saga'
import { fetchProfile } from './Profile.saga'

export default function* rootSaga() {
  yield all([signIn(), signUp(), signOut(), fetchProfile()])
}
