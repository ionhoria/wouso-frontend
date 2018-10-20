import React from 'react'
import Countdown from 'react-countdown-now'
import { Field } from 'redux-form'
import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Timer from '@material-ui/icons/Timer'
import TextField from 'shared/reduxForm/components/TextField'
import { idToFieldName } from '../utils'

const styles = theme => ({
  paper: {
    width: 400,
    padding: '48px 40px 36px'
  },
  actions: {
    paddingTop: 3 * theme.spacing.unit,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  countdown: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '15px'
  }
})

class SolveQuiz extends React.Component {
  componentDidMount () {
    const initObj = {}
    for (let answer of Object.values(this.props.quiz.answers)) {
      initObj[idToFieldName(answer.questionId)] = answer.text
    }
    this.props.initialize(initObj)
  }

  renderField = question => {
    return (
      <div key={question.id}>
        <Typography variant='subheading' gutterBottom>
          {question.text}
        </Typography>
        <Field
          component={TextField}
          name={idToFieldName(question.id)}
          onChange={this.props.onFieldChange}
          fullWidth
          margin='normal'
          multiline
          rowsMax={5}
        />
      </div>
    )
  }

  countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    let color = 'primary'
    if (days === 0 && hours === 0 && minutes < 1) color = 'secondary'
    if (completed) {
      // Render a completed state
      return (
        <div className={this.props.classes.countdown}>
          <Typography variant='title' color='secondary'>
            Timpul a expirat!
          </Typography>
        </div>
      )
    } else {
      // Render a countdown
      return (
        <div className={this.props.classes.countdown}>
          <Timer
            color={color}
            style={{
              paddingRight: '5px',
              paddingBottom: '3px',
              fontSize: '30px'
            }}
          />
          <Typography variant='title' color={color}>
            {days > 0 ? `${days}z` : ''}
            {hours > 0 ? `${hours}h` : ''}
            {minutes > 0 ? `${minutes}m` : ''}
            {seconds}
            s
          </Typography>
        </div>
      )
    }
  }

  render () {
    const { classes, quiz, handleSubmit, onSubmit, saving } = this.props

    return (
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant='title' gutterBottom>
            {quiz.name}
          </Typography>
          {quiz.questions.map(this.renderField)}
          <div className={classes.actions}>
            <Countdown
              date={new Date(quiz.end)}
              renderer={this.countdownRenderer}
              onComplete={handleSubmit(onSubmit)}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              disabled={saving}
            >
              {saving ? 'Se salvează...' : 'Trimite răspunsuri'}
            </Button>
          </div>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(SolveQuiz)
