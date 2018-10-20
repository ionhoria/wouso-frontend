import React from 'react'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import { getQotd, postQotd } from '../actions'
import AnswerComponent from '../components/Answer'

import { reduxForm } from 'redux-form'
const AnswerForm = reduxForm({ form: 'qotd/Answer' })(AnswerComponent)

class Answer extends React.Component {
  componentDidMount () {
    this.props.getQotd().catch(() => this.props.history.push('/qotd'))
  }

  onSubmit = answer => {
    this.props.postQotd(answer).then(() => this.props.history.push('/qotd'))
  }

  render () {
    if (!this.props.qotd || !this.props.qotd.text) {
      return <div>Momentan nu exista un QOTD</div>
    }
    return <AnswerForm onSubmit={this.onSubmit} qotd={this.props.qotd} />
  }
}

const selector = createSelector(selectAppData(manifest), qotd => ({
  qotd
}))

export default connect(selector, { getQotd, postQotd })(Answer)
