import _ from 'lodash'
import { SET_QUIZ } from '../actions/types'

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_QUIZ:
      return Object.assign({}, action.payload, {
        answers: _.mapKeys(action.payload.answers, 'questionId')
      })
    default:
      return state
  }
}

export default rootReducer
