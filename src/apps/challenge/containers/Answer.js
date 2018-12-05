import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from '../../../core/app/reducers'

import { fetchQuestion } from '../actions'

import AnswerComponent from '../components/Answer'

class Answer extends React.Component {
  render () {
    return <AnswerComponent question={this.props.question} />
  }
}

const selector = createSelector(selectAppData(manifest), ({ question }) => ({
  question
}))

export default connect(selector, fetchQuestion)(Answer)
