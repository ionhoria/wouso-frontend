import React from 'react'
import { reduxForm, SubmissionError } from 'redux-form'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { getQuiz } from '../actions'
import { selectAppData } from 'core/app/reducers'
import JoinQuizComponent from '../components/JoinQuiz'

const JoinQuizForm = reduxForm({ form: 'quiz/JoinQuiz' })(JoinQuizComponent)

class JoinQuiz extends React.Component {
  onSubmit = ({ secret }) =>
    this.props
      .getQuiz(secret)
      .then(() => this.props.history.push(`solve/${secret}`))
      .catch(({ response }) => {
        if (response.status === 404) {
          throw new SubmissionError({
            secret: 'Nu există nicio sesiune cu această cheie.'
          })
        }
      })

  render () {
    return <JoinQuizForm onSubmit={this.onSubmit} />
  }
}

const selector = createSelector(selectAppData(manifest), quiz => ({
  quiz
}))

export default connect(selector, { getQuiz })(JoinQuiz)
