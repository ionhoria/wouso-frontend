import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import { getQuest } from '../actions'
import GuideComponent from '../components/Guide'

import Unavailable from '../components/Unavailable'

class Guide extends React.Component {
  state = {
    fetchFailed: false
  }

  componentDidMount () {
    this.fetchQuest()
  }

  fetchQuest = () => {
    this.props.getQuest().catch(() => {
      this.setState({ fetchFailed: true })
    })
  }

  render () {
    const { quest } = this.props
    if (this.state.fetchFailed) {
      return <Unavailable />
    }
    if (!quest) return null
    return <GuideComponent quest={quest} />
  }
}

const selector = createSelector(
  selectAppData(manifest),
  quest => ({
    quest
  })
)

export default connect(
  selector,
  { getQuest }
)(Guide)
