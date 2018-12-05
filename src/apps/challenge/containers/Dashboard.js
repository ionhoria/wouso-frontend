import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import {
  fetchChallenges,
  fetchUsers,
  postChallenge,
  acceptChallenge,
  declineChallenge
} from '../actions'

import DashboardComponent from '../components/Dashboard'

class Dashboard extends React.Component {
  componentDidMount () {
    this.fetchState()
  }

  fetchState = () => {
    this.props.fetchChallenges()
    this.props.fetchUsers()
  }

  sendChallenge = user => {
    this.props.postChallenge(user).then(this.fetchState)
  }

  acceptChallenge = () => this.props.acceptChallenge().then(this.playChallenge)

  playChallenge = () => this.props.history.push('answer')

  declineChallenge = () => {
    this.props.declineChallenge().then(this.fetchState)
  }

  render () {
    return (
      <DashboardComponent
        challenges={this.props.challenges}
        users={this.props.users}
        sendChallenge={this.sendChallenge}
        fetchState={this.fetchState}
        acceptChallenge={this.acceptChallenge}
        declineChallenge={this.declineChallenge}
        playChallenge={this.playChallenge}
      />
    )
  }
}

const selector = createSelector(
  selectAppData(manifest),
  ({ challenges, users }) => ({
    challenges,
    users
  })
)

export default connect(selector, {
  fetchChallenges,
  fetchUsers,
  postChallenge,
  acceptChallenge,
  declineChallenge
})(Dashboard)
