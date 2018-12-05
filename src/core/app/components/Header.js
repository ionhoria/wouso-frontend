import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle'

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flex: 1
  },
  account: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerElem: {
    paddingLeft: 2 * theme.spacing.unit
  }
})

const Header = ({ classes, title, user }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Typography variant='title' color='inherit' className={classes.title}>
        {title}
      </Typography>
      <div className={classes.account}>
        <IconButton color='inherit'>
          <AccountCircle />
        </IconButton>
        <Typography
          variant='title'
          color='inherit'
          className={classes.headerElem}
        >
          {user.firstName} {user.lastName}
        </Typography>
        <Typography
          variant='subheading'
          color='inherit'
          className={classes.headerElem}
        >
          Score: N/A
        </Typography>
      </div>
    </Toolbar>
  </AppBar>
)

export default withStyles(styles)(Header)
