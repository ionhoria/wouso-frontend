import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox
} from '@material-ui/core'

const WrappedListItem = ({ question, input, ...rest }) => {
  const { id, text, answers } = question
  return (
    <ListItem button>
      <ListItemText
        primary={text}
        secondary={`corect: ${answers.valid}; greșit: ${answers.invalid}`}
      />
      <ListItemSecondaryAction>
        <Checkbox
          {...input}
          {...rest}
          value={input.value ? 'true' : 'false'}
          checked={input.checked}
          onClick={(e, checked) => {
            input.onChange(checked)
          }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default WrappedListItem
