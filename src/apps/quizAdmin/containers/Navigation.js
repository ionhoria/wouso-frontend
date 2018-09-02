import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

class Navigation extends React.Component {
  getNavigation () {
    return this.props.apps.map(app => ({ title: app, path: app }))
  }

  render () {
    return this.props.render([
      { title: 'Create Quiz', path: 'create' },
      { title: 'Grade Quiz', path: 'grade' }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Navigation)
