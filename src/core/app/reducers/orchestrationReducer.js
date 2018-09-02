import { SET_APPS } from '../actions/types'

export const selectApps = state => state

export default (state = [], action) => {
  switch (action.type) {
    case SET_APPS:
      return action.payload.map(app => app.name)
    default:
      return state
  }
}
