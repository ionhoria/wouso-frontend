import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'
import JoinQuiz from './JoinQuiz'
import SolveQuiz from './SolveQuiz'
import ThankYou from '../components/ThankYou'

class Routes extends React.Component {
  render () {
    return this.props.render([
      { path: 'answer', component: () => <div>Under construction</div> }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
