import { apiRequest } from 'core/app/actions/api'
import { SET_QOTD, CLEAR_QOTD } from './types'

const ROOT_URL = 'apps/wouso-qotd'

export const getQotd = secret => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: `${ROOT_URL}/sessions`,
        success: payload => dispatch => {
          dispatch(setQotd(payload))
          resolve(payload)
        },
        failure: err => dispatch => {
          dispatch(clearQotd())
          reject(err)
        }
      })
    )
  )

const setQotd = qotd => {
  return {
    type: SET_QOTD,
    payload: qotd
  }
}

const clearQotd = () => {
  return {
    type: CLEAR_QOTD
  }
}

export const postQotd = qotd => dispatch => {
  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/answers`,
        data: qotd,
        success: payload => () => {
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}
