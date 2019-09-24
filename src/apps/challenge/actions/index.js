import { apiRequest } from 'core/app/actions/api'
import { SET_USERS, CLEAR_USERS, SET_CHALLENGE } from './types'

const ROOT_URL = 'apps/challenge'

export const queryUsers = query => dispatch => {
  dispatch({ type: CLEAR_USERS })

  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: `${ROOT_URL}/users?name=${query}`,
        success: payload => dispatch => {
          dispatch(setUsers(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}
const setUsers = users => {
  return {
    type: SET_USERS,
    payload: users
  }
}

export const fetchChallenge = () => dispatch => {
  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: ROOT_URL,
        success: payload => dispatch => {
          dispatch(setChallenge(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}
const setChallenge = challenge => {
  return {
    type: SET_CHALLENGE,
    payload: challenge
  }
}
