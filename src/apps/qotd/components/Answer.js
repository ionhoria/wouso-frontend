import React from 'react'
import { Field } from 'redux-form'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import WrappedRadioGroup from './WrappedRadioGroup'

import { withStyles } from '@material-ui/core/styles'

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
});

const required = value => (!value ? 'Trebuie să alegi un răspuns' : undefined);

const Answer = ({ classes, qotd, handleSubmit, onSubmit }) => {
  const { answers, text: questionText } = qotd;
  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant='title'>
          {questionText}
        </Typography>
        <FormControl component='fieldset' className={classes.formControl}>
          <Field
            name='answer'
            component={WrappedRadioGroup}
            validate={required}
          >
            <FormControlLabel
              value={answers[0]}
              control={<Radio />}
              label={answers[0]}
            />
            <FormControlLabel
              value={answers[1]}
              control={<Radio />}
              label={answers[1]}
            />
            <FormControlLabel
              value={answers[2]}
              control={<Radio />}
              label={answers[2]}
            />
            <FormControlLabel
              value={answers[3]}
              control={<Radio />}
              label={answers[3]}
            />
          </Field>
        </FormControl>

        <div className={classes.actions}>
          <Button
            variant='contained'
            color='secondary'
            component={Link}
            to={'/qotd'}
          >
            Anulare
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className={classes.button}
          >
            Răspunde
          </Button>
        </div>
      </form>
    </Paper>
  )
};

export default withStyles(styles)(Answer)
