import { FETCH_CHALLENGES } from '../actions/types'

const reducer = (
  state = { outgoing: [], incoming: [], history: [] },
  action
) => {
  switch (action.type) {
    case FETCH_CHALLENGES:
      // Extract pending incoming/outgoing challenges for current user
      const outgoing = action.payload.find(
        challenge =>
          challenge.receiver &&
          challenge.status !== 'declined' &&
          new Date(challenge.expires) > Date.now()
      )
      const incoming = action.payload.find(
        challenge =>
          challenge.sender &&
          challenge.status !== 'declined' &&
          new Date(challenge.expires) > Date.now()
      )
      const history = action.payload.filter(
        challenge =>
          new Date(challenge.expires) <= Date.now() ||
          challenge.status === 'declined'
      )
      return { outgoing, incoming, history }
    default:
      return state
  }
}

export default reducer
