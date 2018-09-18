import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

import Dashboard from './Dashboard'
import Solve from './Solve'

class Routes extends React.Component {
  render () {
    return this.props.render([
      {
        path: '',
        component: () => (
          <div>
            Treasure Hunt Home
            <br />
            Folosește meniul din partea stângă pentru navigare.
          </div>
        )
      },
      { path: 'dashboard', component: Dashboard },
      { path: 'solve/:id', component: Solve }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
