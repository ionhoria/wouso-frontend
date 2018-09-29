import React from 'react'
import DatePicker from 'material-ui-pickers/DatePicker'

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
    <DatePicker
      error={!!(showError && error)}
      helperText={showError && error}
      value={value || new Date()}
      onChange={onChange}
      {...other}
    />
  )
}
