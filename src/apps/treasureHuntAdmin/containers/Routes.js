import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

import CreateQuest from './CreateQuest'
import AddQuestion from './AddQuestion'
import Gradebook from './Gradebook'

class Routes extends React.Component {
  render () {
    return this.props.render([
      {
        path: '',
        component: () => (
          <div>
            Treasure Hunt Admin Home
            <br />
            Folosește meniul din partea stângă pentru navigare.
          </div>
        )
      },
      { path: 'quest', component: CreateQuest },
      { path: 'question', component: AddQuestion },
      { path: 'gradebook', component: Gradebook }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
