import { SET_ACTIVE } from '../actions/types'

const activeReducer = (state = { question: {} }, action) => {
  switch (action.type) {
    case SET_ACTIVE:
      return action.payload
    default:
      return state
  }
}

export default activeReducer
