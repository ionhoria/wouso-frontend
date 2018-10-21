import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import WrappedTextField from 'shared/reduxForm/components/TextField'
import { required } from 'utils/validators'
import withStyles from '@material-ui/core/styles/withStyles'

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

const AddQuestion = ({ classes, handleSubmit, onSubmit }) => {
  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='title'>Adaugă o întrebare nouă</Typography>
        <Field
          component={WrappedTextField}
          name='text'
          label='Text întrebare'
          validate={required}
          fullWidth={true}
        />
        <div className={classes.actions}>
          <Button
            variant='contained'
            color='secondary'
            component={Link}
            to={`/treasurehuntadmin`}
          >
            Anulare
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Adaugă întrebare
          </Button>
        </div>
      </form>

    </Paper>
  )
}

export default withStyles(styles)(AddQuestion)
