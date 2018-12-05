import { combineReducers } from 'redux'
import challengesReducer from './challengesReducer'
import usersReducer from './usersReducer'
import questionReducer from './questionReducer'

const rootReducer = combineReducers({
  challenges: challengesReducer,
  users: usersReducer,
  question: questionReducer
})

export default rootReducer
