import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
  container: {
    height: theme.custom.footer.height
  },
  content: {
    paddingLeft: theme.custom.drawer.width,
    display: 'flex',
    justifyContent: 'center',
    width: `calc(100% - ${theme.custom.drawer.width}px)`,
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  }
});

const Footer = ({ classes, children }) => (
  <div className={classes.container}>
    <Divider />
    <div className={classes.content}>
      {children}
    </div>
  </div>
);

export default withStyles(styles)(Footer)
