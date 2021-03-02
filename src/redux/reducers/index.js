import { combineReducers } from 'redux'
import auth from './Auth.reducer'
import signUp from './SignUp.reducer'

const rootReducer = combineReducers({ auth, signUp })

export default rootReducer
