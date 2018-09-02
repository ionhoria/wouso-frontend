import _ from 'lodash'
import { SET_QUIZ, SET_GRADE } from '../actions/types'

const quizReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_QUIZ:
      const { answers } = action.payload
      let retVal = _.groupBy(answers, 'questionId')
      for (let key of Object.keys(retVal)) {
        retVal[key] = _.mapKeys(retVal[key], 'userId')
      }
      return retVal
    case SET_GRADE:
      const { questionId, userId } = action.payload
      return {
        ...state,
        [questionId]: { ...state[questionId], [userId]: action.payload }
      }
    default:
      return state
  }
}

export default quizReducer
