import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

class Navigation extends React.Component {
  render () {
    return this.props.render([
      { title: 'Mașina virtuală', path: 'guide' },
      { title: 'Rezolvă task-uri', path: '/' }
    ])
  }
}

const selector = createSelector(
  selectOrchestration,
  selectApps,
  apps => ({
    apps
  })
)

export default connect(selector)(Navigation)
