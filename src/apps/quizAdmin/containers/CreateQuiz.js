import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import CreateQuizComponent from '../components/CreateQuiz'
import { getQuestions } from '../actions'

import { reduxForm } from 'redux-form'

const CreateQuizForm = reduxForm({ form: 'quizAdmin/CreateQuiz' })(
  CreateQuizComponent
)

class CreateQuiz extends React.Component {
  componentDidMount () {
    this.props.getQuestions()
  }

  render () {
    return (
      <CreateQuizForm questions={this.props.questions} onSubmit={console.log} />
    )
  }
}

const selector = createSelector(selectAppData(manifest), ({ questions }) => ({
  questions
}))

export default connect(selector, { getQuestions })(CreateQuiz)
