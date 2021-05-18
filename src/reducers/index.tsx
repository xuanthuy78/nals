import { combineReducers } from 'redux'
import auth from './Auth'
import users from './Users'

const appReducers = combineReducers({
  auth,
  users
})

export default appReducers
