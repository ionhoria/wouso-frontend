import React from 'react'
import { Paper, List, ListItem, ListItemText } from '@material-ui/core'

import { withStyles } from '@material-ui/core'

const styles = theme => ({
  paper: {
    width: 800,
    padding: '48px 40px 36px'
  }
})

const renderRecord = record => {
  const { userId, question, grade, thSession } = record
  const { id: sessionId, name } = thSession
  return (
    <ListItem key={`u${userId}s${sessionId}`} button>
      <ListItemText
        primary={`Jucătorul cu id:${userId} este la întrebarea ${question} a quiz-ului cu id:${sessionId} (${name}).`}
        secondary={`Până acum, a răspuns corect la ${grade === 1 ? 'o întrebare' : `${grade} întrebări`}.`}
      />
    </ListItem>
  )
}

const Gradebook = ({ classes, gradebook }) => (
  <Paper className={classes.paper}>
    <List>{gradebook.map(renderRecord)}</List>
  </Paper>
)

export default withStyles(styles)(Gradebook)
