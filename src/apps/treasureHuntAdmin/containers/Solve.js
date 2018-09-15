import React from 'react'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import { getActive, answerQuestion } from '../actions'
import SolveComponent from '../components/Solve'

import { reduxForm } from 'redux-form'
const SolveForm = reduxForm({ form: 'treasureHuntAdmin/Solve' })(SolveComponent)

class Solve extends React.Component {
  componentDidMount () {
    this.fetchActive()
  }

  fetchActive = () => {
    this.props
      .getActive(this.props.match.params.id)
      .catch(() => this.props.history.push('/treasurehuntadmin/dashboard'))
  }

  onSubmit = ({ answer }) => {
    this.props
      .answerQuestion(this.props.match.params.id, answer)
      .then(this.fetchActive)
  }

  render () {
    if (
      !this.props.active ||
      this.props.active.id !== this.props.match.params.id
    ) {
      return null
    }
    return (
      <SolveForm
        onSubmit={this.onSubmit}
        active={this.props.active}
        redirect={() => this.props.history.push('/treasurehuntadmin/dashboard')}
      />
    )
  }
}

const selector = createSelector(selectAppData(manifest), ({ active }) => ({
  active
}))

export default connect(selector, { getActive, answerQuestion })(Solve)
