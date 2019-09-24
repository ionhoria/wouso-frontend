import { combineReducers } from 'redux'

import challengeReducer from './challengeReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  challenge: challengeReducer,
  users: usersReducer
})

export default rootReducer
