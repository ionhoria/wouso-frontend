import React from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import AssignmentIcon from '@material-ui/icons/Assignment'

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

const renderQuest = quest => (
  <ListItem key={quest.id} button component={Link} to={`solve/${quest.id}`}>
    <ListItemAvatar>
      <Avatar>
        <AssignmentIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={quest.name} />
  </ListItem>
);

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
};

export default withStyles(styles)(Dashboard)
