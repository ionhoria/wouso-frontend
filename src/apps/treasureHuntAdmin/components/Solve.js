import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import WrappedRadioGroup from './WrappedRadioGroup'

import { withStyles } from '@material-ui/core'

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
  button: {
    marginLeft: '10px'
  }
})

const Solve = ({ classes, active, handleSubmit, onSubmit }) => (
  <Paper className={classes.paper}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='title'>{active.name}</Typography>
      <Typography variant='subheading'>
        {active.question.text}
      </Typography>
      <Field
        name='answer'
        component={WrappedRadioGroup}
        answers={active.question.answers}
      />
      <div className={classes.actions}>
        <Button
          variant='contained'
          color='secondary'
          component={Link}
          to={'/treasurehuntadmin/dashboard'}
        >
          Anulare
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          // disabled={noQuestions}
          className={classes.button}
        >
          Răspunde
        </Button>
      </div>
    </form>
  </Paper>
)

export default withStyles(styles)(Solve)
