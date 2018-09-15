import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import CreateQuestComponent from '../components/CreateQuest'
import { getQuestions, postQuest } from '../actions'

import { reduxForm } from 'redux-form'

const CreateQuestForm = reduxForm({ form: 'treasureHuntAdmin/CreateQuest' })(
  CreateQuestComponent
)

class CreateQuest extends React.Component {
  componentDidMount () {
    this.props.getQuestions()
  }

  onSubmit = quest => {
    this.props
      .postQuest(quest)
      .then(() => this.props.history.push('dashboard'))
      .catch(console.err)
  }

  render () {
    return (
      <CreateQuestForm
        questions={this.props.questions}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const selector = createSelector(selectAppData(manifest), ({ questions }) => ({
  questions
}))

export default connect(selector, { getQuestions, postQuest })(CreateQuest)
