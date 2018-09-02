import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'
import Statistics from './Statistics'

class Routes extends React.Component {
  getRoutes () {
    return this.props.apps.map(app => ({
      path: app,
      render: () => <Statistics appName={app} />
    }))
  }

  render () {
    return this.props.render(this.getRoutes())
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
