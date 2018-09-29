import { SET_GRADEBOOK } from '../actions/types'

const gradebookReducer = (state = [], action) => {
  switch (action.type) {
    case SET_GRADEBOOK:
      return action.payload
    default:
      return state
  }
}

export default gradebookReducer
