import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { selectOrchestration } from 'core/app/reducers'
import { selectApps } from 'core/app/reducers/orchestrationReducer'

import QuizList from './QuizList'
import GradeQuiz from './GradeQuiz'
import CreateQuiz from './CreateQuiz'

class Routes extends React.Component {
  render () {
    return this.props.render([
      { path: 'grade', component: QuizList },
      { path: 'grade/:secret', component: GradeQuiz },
      { path: 'create', component: CreateQuiz }
    ])
  }
}

const selector = createSelector(selectOrchestration, selectApps, apps => ({
  apps
}))

export default connect(selector)(Routes)
