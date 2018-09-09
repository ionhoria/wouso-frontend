import React from 'react'

import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import { getGradebook } from '../actions'
import GradebookComponent from '../components/Gradebook'

class Gradebook extends React.Component {
  componentDidMount () {
    this.props.getGradebook()
  }

  render () {
    return <GradebookComponent gradebook={this.props.gradebook} />
  }
}

const selector = createSelector(selectAppData(manifest), ({ gradebook }) => ({
  gradebook
}))

export default connect(selector, { getGradebook })(Gradebook)
