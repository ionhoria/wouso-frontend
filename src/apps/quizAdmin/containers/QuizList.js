import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import QuizListComponent from '../components/QuizList'
import { getQuizes } from '../actions'

class QuizList extends React.Component {
  componentDidMount () {
    this.props.getQuizes()
  }

  render () {
    if (!this.props.quizes) return null
    return <QuizListComponent quizes={this.props.quizes} />
  }
}

const selector = createSelector(selectAppData(manifest), ({ quizes }) => ({
  quizes
}))

export default connect(selector, { getQuizes })(QuizList)
