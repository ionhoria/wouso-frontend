import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import * as manifest from '../manifest'
import { getAppStatistics } from '../actions'
import { selectAppData } from 'core/app/reducers'
import StatisticsComponent from '../components/Statistics'

class Statistics extends React.Component {
  componentDidMount () {
    const { appName, getAppStatistics } = this.props

    getAppStatistics(appName)
  }
  render () {
    const { statistics, appName } = this.props

    if (!statistics[appName]) {
      return null
    }

    return <StatisticsComponent statistics={statistics[appName]} />
  }
}

const selector = createSelector(selectAppData(manifest), statistics => ({
  statistics
}))

export default connect(selector, { getAppStatistics })(Statistics)
