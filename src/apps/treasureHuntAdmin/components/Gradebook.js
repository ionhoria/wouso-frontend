import React from 'react'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import withStyles from '@material-ui/core/styles/withStyles'

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
