import { SET_APP_STATISTICS } from '../actions/types'

export const selectAppStatistics = appName => state => state[appName]

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_APP_STATISTICS:
      const { appName, statistics } = action.payload

      return { ...state, [appName]: statistics }
    default:
      return state
  }
}

export default rootReducer
