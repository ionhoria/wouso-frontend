import { SET_QUIZ } from '../actions/types'

const quizReducer = (state = { questions: [] }, action) => {
  switch (action.type) {
    case SET_QUIZ:
      const { answers, ...quiz } = action.payload
      return quiz
    default:
      return state
  }
}

export default quizReducer
