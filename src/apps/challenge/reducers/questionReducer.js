import { FETCH_QUESTION } from '../actions/types'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUESTION:
      return action.payload
    default:
      return state
  }
}

export default reducer
