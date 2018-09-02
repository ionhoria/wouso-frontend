import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'

import React from 'react'

import { withStyles } from '@material-ui/core'

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
})

const WrappedRadioGroup = ({ classes, answers, input, ...rest }) => {
  return (
    <FormControl component='fieldset' className={classes.formControl}>
      <FormLabel component='legend'>Alege un singur răspuns corect</FormLabel>
      <RadioGroup
        aria-label='Gender'
        name='gender'
        className={classes.group}
        value={input.value}
        onChange={(e, value) => input.onChange(value)}
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
      </RadioGroup>
    </FormControl>
  )
}

export default withStyles(styles)(WrappedRadioGroup)
