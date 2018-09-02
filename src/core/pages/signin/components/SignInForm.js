import React from 'react'
import { Field } from 'redux-form'

import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import TextField from 'shared/reduxForm/components/TextField'
import { required } from 'utils/validators'

const styles = theme => ({
  actions: {
    paddingTop: 3 * theme.spacing.unit,
    display: 'flex',
    justifyContent: 'flex-end'
  }
})

const SignInForm = ({ classes, onSubmit, valid, handleSubmit, ...rest }) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Typography variant='title' gutterBottom>
      Autentifică-te
    </Typography>
    <Typography variant='subheading' gutterBottom>
      cu contul tău de World of USO
    </Typography>
    <Field
      component={TextField}
      name='username'
      label='Utilizator'
      fullWidth
      margin='normal'
      validate={required}
    />
    <Field
      component={TextField}
      name='password'
      label='Parolă'
      fullWidth
      margin='normal'
      type='password'
      validate={required}
    />

    <div className={classes.actions}>
      <Button
        type='submit'
        variant='contained'
        color='primary'
        disabled={!valid}
      >
        Autentifică-te
      </Button>
    </div>
  </form>
)

export default withStyles(styles)(SignInForm)
