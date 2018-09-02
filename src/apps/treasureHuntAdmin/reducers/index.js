import { combineReducers } from 'redux'

import questionsReducer from './questionsReducer'
import questsReducer from './questsReducer'
import activeReducer from './activeReducer'

export default combineReducers({
  questions: questionsReducer,
  quests: questsReducer,
  active: activeReducer
})
