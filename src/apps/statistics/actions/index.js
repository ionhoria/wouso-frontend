import { SET_APP_STATISTICS } from './types'
import { apiRequest } from 'core/app/actions/api'

export const setAppStatistics = (appName, statistics) => ({
  type: SET_APP_STATISTICS,
  payload: { appName, statistics }
})

export const getAppStatistics = appName => dispatch =>
  dispatch(
    apiRequest({
      method: 'GET',
      path: `apps/wouso-statistics-app/${appName}`,
      success: payload => dispatch =>
        dispatch(setAppStatistics(appName, payload))
    })
  )
