import { combineReducers } from 'redux'
import auth from './Auth.reducer'
import signUp from './SignUp.reducer'
import signOut from './SignOut.reducer'
import profile from './Profile.reducer'

const rootReducer = combineReducers({ auth, signUp, signOut, profile })

export default rootReducer
