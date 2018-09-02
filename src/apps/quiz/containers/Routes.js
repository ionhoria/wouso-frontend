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
      { path: 'solve', component: JoinQuiz },
      { path: 'solve/thankyou', component: ThankYou },
      { path: 'solve/:secret', component: SolveQuiz }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
