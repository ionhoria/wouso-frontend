import { apiRequest } from 'core/app/actions/api'
import { FETCH_CHALLENGES, FETCH_USERS, FETCH_QUESTION } from './types'

const ROOT_URL = 'apps/wouso-challenge'

export const fetchChallenges = () => dispatch =>
  dispatch(
    apiRequest({
      method: 'GET',
      path: ROOT_URL,
      success: payload => dispatch => {
        dispatch({ type: FETCH_CHALLENGES, payload })
      },
      failure: err => () => {
        console.error(err)
      }
    })
  )

export const fetchUsers = () => dispatch =>
  dispatch(
    apiRequest({
      method: 'GET',
      path: `${ROOT_URL}/users`,
      success: payload => dispatch => {
        dispatch({ type: FETCH_USERS, payload })
      },
      failure: err => () => {
        console.error(err)
      }
    })
  )

export const postChallenge = data => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/challenge`,
        data,
        success: payload => () => {
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

export const acceptChallenge = () => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/accept`,
        success: payload => () => {
          resolve(payload)
        },
        failure: err => () => reject(err)
      })
    )
  )

export const declineChallenge = () => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/decline`,
        success: payload => () => resolve(payload),
        failure: err => () => reject(err)
      })
    )
  )

export const fetchQuestion = () => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(
      apiRequest({
        method: 'GET',
        path: `${ROOT_URL}/question`,
        success: payload => dispatch =>
          dispatch({ type: FETCH_QUESTION, payload }),
        failure: err => () => reject(err)
      })
    )
  })
