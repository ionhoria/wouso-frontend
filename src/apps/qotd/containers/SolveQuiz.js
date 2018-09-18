import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { getQuiz, postQuiz } from '../actions'
import { selectAppData } from 'core/app/reducers'
import SolveQuizComponent from '../components/SolveQuiz'
import { fieldNameToId } from '../utils'

const SolveQuizForm = reduxForm({ form: 'quiz/SolveQuiz' })(SolveQuizComponent)

class SolveQuiz extends React.Component {
  state = {
    handler: null,
    toPush: {},
    saving: false,
    redirect: false
  }

  hasQuiz () {
    const { quiz, match: { params: { secret } } } = this.props
    return quiz && quiz.secret === secret
  }

  componentDidMount () {
    if (!this.hasQuiz()) {
      this.props
        .getQuiz(this.props.match.params.secret)
        .catch(() => this.props.history.push('../solve'))
    }
  }

  debouncedPostQuiz = (answers, redirect) => {
    this.setState({ saving: true })

    if (this.state.redirect) return
    if (redirect) this.setState({ redirect: true })

    if (this.state.handler !== null) {
      clearTimeout(this.state.handler)
    }

    const newToPush = {}
    for (let answer of answers) {
      const { questionId, text } = answer
      newToPush[questionId] = { questionId, text }
    }
    this.setState({ toPush: Object.assign({}, this.state.toPush, newToPush) })

    this.setState({
      handler: setTimeout(() => {
        this.props
          .postQuiz(
            Object.values(this.state.toPush).map(({ questionId, text }) => ({
              questionId,
              text
            })),
            this.props.quiz.id
          )
          .then(() => {
            this.setState({ saving: false, toPush: {} })
            if (this.state.redirect) this.props.history.push('thankyou')
          })
          .catch(console.err)
      }, this.state.redirect ? 0 : 1000)
    })
  }

  onSubmit = answers => {
    const payload = Object.keys(answers).map(key => ({
      questionId: fieldNameToId(key),
      text: answers[key]
    }))
    this.debouncedPostQuiz(payload, true)
  }

  onFieldChange = (event, newValue, oldValue, field) => {
    const payload = [{ questionId: fieldNameToId(field), text: newValue }]
    this.debouncedPostQuiz(payload, false)
  }

  render () {
    if (!this.hasQuiz()) return null
    return (
      <SolveQuizForm
        quiz={this.props.quiz}
        onSubmit={this.onSubmit}
        onFieldChange={this.onFieldChange}
        saving={this.state.saving}
      />
    )
  }
}

const selector = createSelector(selectAppData(manifest), quiz => ({
  quiz
}))

export default connect(selector, { getQuiz, postQuiz: postQuiz() })(SolveQuiz)
