import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import { fetchChallenge, queryUsers } from '../actions'

import DashboardComponent from '../components/Dashboard'

class Dashboard extends React.Component {
  componentDidMount () {}

  queryUsers = query => {
    this.props.queryUsers(query)
  }

  render () {
    return (
      <DashboardComponent
        challenge={this.props.challenge}
        users={this.props.users}
        queryUsers={this.queryUsers}
      />
    )
  }
}

const selector = createSelector(
  selectAppData(manifest),
  ({ challenge, users }) => ({
    challenge,
    users
  })
)

export default connect(
  selector,
  { queryUsers, fetchChallenge }
)(Dashboard)
