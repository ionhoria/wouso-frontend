import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import withStyles from '@material-ui/core/styles/withStyles'
import { Button } from '@material-ui/core'

const styles = theme => ({
  paper: theme.paper,
  actions: theme.actions,
  users: {
    height: '200px',
    overflow: 'auto'
  }
})

const QUERY_FORMAT = /^[a-z0-9]*$/i

class Dashboard extends React.Component {
  state = { value: '', error: false }

  handleChange = event => {
    const { value } = event.target
    if (QUERY_FORMAT.test(value)) {
      this.setState({ value, error: false })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const { value } = this.state
    if (value.length < 3) {
      this.setState({ error: true })
    } else {
      this.props.queryUsers(value)
    }
  }

  renderUser = ({ username, firstName, lastName }) => (
    <ListItem key={username} style={{ paddingLeft: '0px' }}>
      <ListItemText primary={`${lastName} ${firstName}`} secondary={username} />
      <Button
        variant='contained'
        color='primary'
        onClick={() => console.log('challengeing ', username)}
      >
        Provoacă
      </Button>
    </ListItem>
  )

  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Typography variant='h6'>Challenge Dashboard</Typography>
        <div>
          <Typography>Incoming challenge:</Typography>
          <Typography>Outgoing challenge:</Typography>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <TextField
              id='query'
              label='Caută jucători'
              value={this.state.value}
              onChange={this.handleChange}
              margin='normal'
              fullWidth
              error={this.state.error}
              helperText={
                this.state.error
                  ? 'Căutarea trebuie să conțină minim 3 caractere!'
                  : 'Apasă ENTER pentru a caută.'
              }
              autoComplete='off'
            />
          </form>
          <List dense className={this.props.classes.users}>
            {this.props.users && this.props.users.map(this.renderUser)}
          </List>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(Dashboard)
