import { apiRequest } from 'core/app/actions/api'
import { SET_QUESTIONS, SET_QUESTION } from './types'

const ROOT_URL = 'apps/wouso-qotd'

export const schedule = qotd => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: `${ROOT_URL}/sessions`,
        data: qotd,
        success: payload => dispatch => {
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

export const postQuestion = question => dispatch => {
  return new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'POST',
        path: 'apps/wouso-treasure-hunt/questions',
        data: question,
        success: payload => () => {
          dispatch(setQuestion(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )
}

const setQuestion = question => {
  return {
    type: SET_QUESTION,
    payload: question
  }
}

export const getQuestions = () => dispatch =>
  new Promise((resolve, reject) =>
    dispatch(
      apiRequest({
        method: 'GET',
        path: 'apps/wouso-treasure-hunt/questions',
        success: payload => dispatch => {
          dispatch(setQuestions(payload))
          resolve(payload)
        },
        failure: err => () => {
          reject(err)
        }
      })
    )
  )

const setQuestions = questions => {
  return {
    type: SET_QUESTIONS,
    payload: questions
  }
}
