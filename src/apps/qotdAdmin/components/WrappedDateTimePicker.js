import React from 'react'
import DateTimePicker from 'material-ui-pickers/DateTimePicker'

export default props => {
  const {
    timezone,
    showErrorsInline,
    dispatch,
    input: { onChange, value },
    meta: { touched, error },
    ...other
  } = props

  const showError = showErrorsInline || touched

  return (
    <DateTimePicker
      error={!!(showError && error)}
      helperText={showError && error}
      value={value || new Date()}
      onChange={onChange}
      {...other}
    />
  )
}
