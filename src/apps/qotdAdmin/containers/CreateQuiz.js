import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider
  from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

import CreateQuizComponent from '../components/CreateQuiz'
import { getQuestions, postQuiz } from '../actions'

import { reduxForm } from 'redux-form'

const CreateQuizForm = reduxForm({ form: 'quizAdmin/CreateQuiz' })(
  CreateQuizComponent
)

class CreateQuiz extends React.Component {
  componentDidMount () {
    this.props.getQuestions()
  }

  onSubmit = ({ questions, ...quiz }) => {
    this.props
      .postQuiz({
        ...quiz,
        questions: questions.map(question => question.id)
      })
      .then(() => this.props.history.push('/quizadmin'))
      .catch(console.err)
  }

  render () {
    return (
      <React.Fragment>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CreateQuizForm
            questions={this.props.questions}
            onSubmit={this.onSubmit}
          />
        </MuiPickersUtilsProvider>
      </React.Fragment>
    )
  }
}

const selector = createSelector(selectAppData(manifest), ({ questions }) => ({
  questions
}))

export default connect(selector, { getQuestions, postQuiz })(CreateQuiz)
