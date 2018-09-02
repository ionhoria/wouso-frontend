import React from 'react'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import { getQuests } from '../actions'
import DashboardComponent from '../components/Dashboard'

class Dashboard extends React.Component {
  componentDidMount () {
    this.props.getQuests()
  }

  render () {
    return <DashboardComponent quests={this.props.quests} />
  }
}

const selector = createSelector(selectAppData(manifest), ({ quests }) => ({
  quests
}))

export default connect(selector, { getQuests })(Dashboard)
