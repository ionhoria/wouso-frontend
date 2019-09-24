import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Popover from '@material-ui/core/Popover';

import logoWhite from '../../../media/logoWhite.png';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  toolbar: {
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 1
    }
  },
  title: {
    marginLeft: 3 * theme.spacing.unit,
    flex: 1,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  account: {
    marginRight: 2 * theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },
  home: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  popover: {
    padding: 2 * theme.spacing.unit
  }
});

class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes, title, user, toggleMobileSidebar } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color='inherit'
            aria-label='Open sidebar'
            onClick={toggleMobileSidebar}
            className={classes.home}
          >
            <MenuIcon />
          </IconButton>
          <img height='52px' src={logoWhite} alt='World of USO' />
          <Typography variant='h6' color='inherit' className={classes.title}>
            {title}
          </Typography>
          {user.authenticated && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Below shows on mobile */}
              <Hidden smUp implementation='css'>
                <IconButton
                  color='inherit'
                  aria-owns={open ? 'simple-popper' : undefined}
                  aria-haspopup='true'
                  onClick={this.handleClick}
                >
                  <AccountCircle />
                </IconButton>
                <Popover
                  id='simple-popper'
                  open={open}
                  anchorEl={anchorEl}
                  onClose={this.handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                  }}
                >
                  <div className={classes.popover}>
                    <Typography variant='h6' color='inherit'>
                      {user.firstName} {user.lastName}
                    </Typography>
                    <Typography color='inherit'>
                      Puncte: <b>{user.score}</b>
                    </Typography>
                  </div>
                </Popover>
              </Hidden>
              {/* Below shows on desktop */}
              <Hidden xsDown implementation='css'>
                <div className={classes.account}>
                  <Typography variant='h6' color='inherit'>
                    {user.firstName} {user.lastName}
                  </Typography>
                  <Typography color='inherit'>
                    Puncte: <b>{user.score}</b>
                  </Typography>
                </div>
              </Hidden>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
