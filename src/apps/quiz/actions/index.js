import { apiRequest } from 'core/app/actions/api'
import { SET_QUIZ } from './types'

export const getQuiz = secret => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: `apps/wouso-test-app/sessions/join/${secret}`,
        success: payload => dispatch => {
          dispatch(setQuiz(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

const setQuiz = quiz => {
  return {
    type: SET_QUIZ,
    payload: quiz
  }
}

export const postQuiz = () => {
  return (answers, sessionId) => dispatch =>
    new Promise((resolve, reject) => {
      dispatch(
        apiRequest({
          method: 'POST',
          path: 'apps/wouso-test-app/answers',
          data: {
            sessionId,
            answers
          },
          success: payload => () => {
            resolve(payload)
          },
          failure: err => () => {
            reject(err)
          }
        })
      )
    })
}
