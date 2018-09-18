import _ from 'lodash'
import { SET_QUIZES } from '../actions/types'

const quizListReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_QUIZES:
      return _.mapKeys(action.payload, 'id')
    default:
      return state
  }
}

export default quizListReducer
