import { SET_USER, CLEAR_USER } from '../actions/types'

export const isUserAuthenticated = state => state.user.authenticated

export default (state = { authenticated: false, permissions: [] }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload, authenticated: true }
    case CLEAR_USER:
      return { authenticated: false, permissions: [] }
    default:
      return state
  }
}
