import { SET_QUESTS, SET_QUEST } from '../actions/types'

const questionsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUESTS:
      return action.payload
    case SET_QUEST:
      return state.concat(action.payload)
    default:
      return state
  }
}

export default questionsReducer
