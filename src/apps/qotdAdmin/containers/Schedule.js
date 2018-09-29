import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import MuiPickersUtilsProvider
  from 'material-ui-pickers/utils/MuiPickersUtilsProvider'

import ScheduleComponent from '../components/Schedule'
import { getQuestions, schedule } from '../actions'

import { reduxForm } from 'redux-form'

const ScheduleForm = reduxForm({ form: 'qotdAdmin/Schedule' })(
  ScheduleComponent
)

class Schedule extends React.Component {
  componentDidMount () {
    this.props.getQuestions()
  }

  onSubmit = ({ day, qotd: { id } }) => {
    this.props
      .schedule({ qotd: id, day })
      .then(() => this.props.history.push('/qotdadmin'))
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
          <ScheduleForm
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

export default connect(selector, { getQuestions, schedule })(Schedule)
