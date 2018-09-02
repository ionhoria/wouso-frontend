import { apiRequest } from 'core/app/actions/api'
import { SET_USER } from './types'

export const signIn = (username, password) => dispatch =>
  dispatch(
    apiRequest({
      method: 'POST',
      path: 'users/authentication',
      data: { username, password },
      success: setUser
    })
  )

export const setUser = user => ({
  type: SET_USER,
  payload: user
})
