import { SET_QOTD, CLEAR_QOTD } from '../actions/types'

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_QOTD:
      return action.payload
    case CLEAR_QOTD:
      return {}
    default:
      return state
  }
}

export default rootReducer
