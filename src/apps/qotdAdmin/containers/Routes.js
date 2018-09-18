import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

import QuizList from './QuizList'
import GradeQuiz from './GradeQuiz'
import CreateQuiz from './CreateQuiz'
import AddQuestion from './AddQuestion'

class Routes extends React.Component {
  render () {
    return this.props.render([
      { path: 'question', component: () => <div>Under construction</div> }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
