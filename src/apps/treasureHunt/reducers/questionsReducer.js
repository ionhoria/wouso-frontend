import { SET_QUESTION, SET_QUESTIONS } from '../actions/types'

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTIONS:
      return action.payload
    case SET_QUESTION:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default questionsReducer
