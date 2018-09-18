import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as manifest from '../manifest'
import { selectAppData } from 'core/app/reducers'

import GradeQuizComponent from '../components/GradeQuiz'
import { getQuiz, setGrade, postGrades } from '../actions'

class GradeQuiz extends React.Component {
  componentDidMount () {
    this.props
      .getQuiz(this.props.match.params.secret)
      .catch(() => this.props.history.push('/quizadmin/grade'))
  }

  hasQuiz () {
    const { quiz, match: { params: { secret } } } = this.props
    return quiz.secret && quiz.secret === secret
  }

  onClick = answer => {
    answer.grade = answer.grade === 10 ? 0 : 10
    this.props.setGrade(answer)
    this.props.postGrades([answer])
  }

  render () {
    if (!this.hasQuiz()) return null
    return (
      <GradeQuizComponent
        quiz={this.props.quiz}
        quizAnswers={this.props.quizAnswers}
        onClick={this.onClick}
      />
    )
  }
}

const selector = createSelector(
  selectAppData(manifest),
  ({ quiz, quizAnswers }) => ({
    quiz,
    quizAnswers
  })
)

export default connect(selector, { getQuiz, setGrade, postGrades })(GradeQuiz)
