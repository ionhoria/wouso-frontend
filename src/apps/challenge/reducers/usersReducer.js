import { FETCH_USERS } from '../actions/types'

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload
    default:
      return state
  }
}

export default reducer
