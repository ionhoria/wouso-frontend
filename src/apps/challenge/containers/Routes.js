import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

import Dashboard from './Dashboard'

class Routes extends React.Component {
  render () {
    return this.props.render([{ path: '/', component: Dashboard }])
  }
}

const selector = createSelector(
  selectOrchestration,
  selectApps,
  apps => ({
    apps
  })
)

export default connect(selector)(Routes)
