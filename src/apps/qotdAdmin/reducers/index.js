import { combineReducers } from 'redux'
import quizListReducer from './quizListReducer'
import quizReducer from './quizReducer'
import quizAnswersReducer from './quizAnswersReducer'
import questionsReducer from './questionsReducer'

export default combineReducers({
  quizes: quizListReducer,
  quiz: quizReducer,
  quizAnswers: quizAnswersReducer,
  questions: questionsReducer
})
