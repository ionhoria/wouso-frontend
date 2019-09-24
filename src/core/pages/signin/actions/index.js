import { apiRequest } from 'core/app/actions/api'
import { SET_USER, CLEAR_USER } from './types'

export const signIn = (username, password) => dispatch =>
  new Promise((resolve, reject) => {
    dispatch(
      apiRequest({
        method: 'POST',
        path: 'users/authentication',
        data: { username, password },
        success: setUser,
        failure: err => () => reject(err)
      })
    )
  })

export const setUser = user => ({
  type: SET_USER,
  payload: user
})

export const signOut = () => dispatch =>
  dispatch(
    apiRequest({
      method: 'POST',
      path: 'users/signout',
      success: clearUser,
      failure: clearUser
    })
  )

const clearUser = () => ({
  type: CLEAR_USER
})
