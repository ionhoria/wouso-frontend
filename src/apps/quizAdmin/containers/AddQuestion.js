import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import AddQuestionComponent from '../components/AddQuestion'
import { postQuestion } from '../actions'

import { reduxForm } from 'redux-form'

const AddQuestionForm = reduxForm({ form: 'treasureHuntAdmin/AddQuestion' })(
  AddQuestionComponent
)

class AddQuestion extends React.Component {
  onSubmit = question => {
    this.props
      .postQuestion(question)
      .then(() => this.props.history.push('/quizadmin/create'))
      .catch(console.err)
  }

  render () {
    return <AddQuestionForm onSubmit={this.onSubmit} />
  }
}

const selector = createSelector(selectAppData(manifest), () => ({}))

export default connect(selector, { postQuestion })(AddQuestion)
