import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  container: {
    paddingLeft: theme.custom.drawer.width,
    backgroundColor: theme.palette.background.default
  }
});

const ContentPadding = ({ classes, children }) => (
  <div className={classes.container}>
    {' '}<div className={classes.toolbar} />{children}
  </div>
);

export default withStyles(styles)(ContentPadding)
