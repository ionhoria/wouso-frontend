import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

const WrappedCheckbox = ({ input }) => (
  <Checkbox
    value={input.value ? 'true' : 'false'}
    checked={input.checked}
    onClick={input.onChange}
  />
)

export default WrappedCheckbox
