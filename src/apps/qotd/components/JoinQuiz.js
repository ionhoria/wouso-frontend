import React from 'react'
import { Field } from 'redux-form'
import { withStyles, Paper, Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from 'shared/reduxForm/components/TextField'
import { required } from 'utils/validators'

const styles = theme => ({
  paper: {
    width: 400,
    padding: '48px 40px 36px'
  },
  actions: {
    paddingTop: 3 * theme.spacing.unit,
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

const JoinQuiz = ({ classes, onSubmit, handleSubmit, valid }) => {
  return (
    <Paper className={classes.paper}>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='title' gutterBottom>
          Întră în quiz
        </Typography>
        <Typography variant='subheading' gutterBottom>
          folosind codul secret primit
        </Typography>
        <Field
          component={TextField}
          name='secret'
          label='Cod secret'
          placeholder='i.e fearlessbanana'
          fullWidth
          margin='normal'
          validate={required}
        />
        <div className={classes.actions}>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            disabled={!valid}
          >
            Intră în quiz
          </Button>
        </div>
      </form>

    </Paper>
  )
}

export default withStyles(styles)(JoinQuiz)
