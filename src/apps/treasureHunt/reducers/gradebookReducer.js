import { SET_GRADEBOOK } from '../actions/types'

const activeReducer = (state = [], action) => {
  switch (action.type) {
    case SET_GRADEBOOK:
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}

export default activeReducer
