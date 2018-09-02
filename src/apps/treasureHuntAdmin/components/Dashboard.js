import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemIcon
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

import { withStyles } from '@material-ui/core'

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

const renderQuest = quest => (
  <ListItem key={quest.id} button component={Link} to={`solve/${quest.id}`}>
    <ListItemText primary={quest.name} />
    <ListItemSecondaryAction>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
    </ListItemSecondaryAction>
  </ListItem>
)

const Dashboard = ({ classes, quests }) => {
  return (
    <Paper className={classes.paper}>
      <Typography variant='title'>Quest-uri disponibile</Typography>
      <Typography variant='subheading'>
        Alege să răspunzi la unul dintre quest-urile de mai jos.
      </Typography>
      <List>{quests.map(quest => renderQuest(quest))}</List>

    </Paper>
  )
}

export default withStyles(styles)(Dashboard)
