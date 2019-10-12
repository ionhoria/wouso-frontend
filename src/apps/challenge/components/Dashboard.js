import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { ListItemText } from '@material-ui/core'

const styles = theme => ({
  paper: { ...theme.paper, width: '800px' },
  actions: theme.actions,
  title: {
    paddingTop: 2 * theme.spacing(2)
  }
})

const renderOutgoing = challenge => {
  if (!challenge) {
    return <p><b>OUTGOING</b>: No pending challenge. Go challenge someone!</p>
  }
  return (
    <p>
      <b>OUTGOING</b>:
      {' '}
      <b>{challenge.receiver}</b>
      {' '}
      is pending a challenge invitation from you.
      He has until
      {' '}
      <b>{new Date(challenge.expires).toLocaleTimeString()}</b>
      {' '}
      to accept or decline.
    </p>
  )
}

const renderIncoming = (
  classes,
  challenge,
  acceptChallenge,
  declineChallenge,
  playChallenge
) => {
  if (!challenge) {
    return (
      <div>
        <b>INCOMING</b>: No pending challenge. Ask someone to challenge you!
      </div>
    )
  }
  if (challenge.status === 'accepted') {
    return (
      <div>
        <b>INCOMING</b>: You have accepted a challenge invitation from
        {' '}
        <b>{challenge.sender}</b>
        . Challenge expires at
        {' '}
        <b>{new Date(challenge.expires).toLocaleTimeString()}</b>
        .
        <div className={classes.actions}>
          <Button
            variant='contained'
            onClick={playChallenge}
            style={{ marginRight: '8px' }}
          >
            PLAY CHALLENGE
          </Button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <b>INCOMING</b>: You are pending a challenge invitation from
      {' '}
      <b>{challenge.sender}</b>
      . Invitation expires at
      {' '}
      <b>{new Date(challenge.expires).toLocaleTimeString()}</b>
      .
      <div className={classes.actions}>
        <Button
          variant='contained'
          onClick={acceptChallenge}
          style={{ marginRight: '8px' }}
        >
          ACCEPT
        </Button>
        <Button variant='contained' onClick={declineChallenge}>
          DECLINE
        </Button>
      </div>
    </div>
  )
}

const renderHistory = challenge => {
  const { sender, receiver, expires, status, victory } = challenge
  let report = 'Expired'
  if (status === 'accepted') {
    report = victory === null
      ? 'Tie'
      : victory === true ? 'Sender won' : 'Sender lost'
  } else if (status === 'declined') {
    report = 'Declined'
  }
  if (receiver) {
    return (
      <p key={challenge.id}>
        You challenged {receiver}.<br />
        Status: {report}<br />
        {new Date(expires).toLocaleString()}
      </p>
    )
  } else {
    return (
      <p key={challenge.id}>
        You were challenged by {sender}.<br />
        Status: {report}<br />
        {new Date(expires).toLocaleString()}
      </p>
    )
  }
}

const renderUser = (user, sendChallenge) => {
  const { id, firstName, lastName, userName } = user
  return (
    <ListItem key={id}>
      <ListItemText primary={`${firstName} ${lastName} (${userName})`} />
      <Button onClick={() => sendChallenge(user)}>Challenge</Button>
    </ListItem>
  )
}

const Dashboard = ({
  classes,
  challenges,
  users,
  sendChallenge,
  fetchState,
  acceptChallenge,
  declineChallenge,
  playChallenge
}) => {
  return (
    <Paper className={classes.paper}>
      <div>
        <Typography variant='title'>
          Challenge Dashboard
        </Typography>
        <div className={classes.actions}>
          <Button variant='contained' color='primary' onClick={fetchState}>
            Refresh
          </Button>
        </div>
      </div>
      {renderOutgoing(challenges.outgoing)}
      {renderIncoming(
        classes,
        challenges.incoming,
        acceptChallenge,
        declineChallenge,
        playChallenge
      )}

      {/* If no outgoing challenge is pending,
      display a possible list of users to challenge from */}
      {challenges.outgoing
        ? null
        : <div>
          <Typography variant='title' className={classes.title}>
              Users you can challenge:
            </Typography>
          <List>
            {users.map(user => renderUser(user, sendChallenge))}
          </List>
        </div>}

      <div>
        <Typography variant='title' className={classes.title}>
          Challenge history
        </Typography>
        {challenges.history.length !== 0
          ? challenges.history.map(renderHistory)
          : 'Your challenge history is empty.'}
      </div>
    </Paper>
  )
}

export default withStyles(styles)(Dashboard)
