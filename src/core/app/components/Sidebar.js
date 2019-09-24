import React from "react";
import Link from "react-router-dom/Link";
import Drawer from "@material-ui/core/Drawer";
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  drawerPaper: { width: theme.custom.drawer.width },
  toolbar: theme.mixins.toolbar,
  actions: {
    padding: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit
  }
});

class Sidebar extends React.Component {
  render() {
    const { classes, children, mobileSidebar, toggleMobileSidebar, signOut } = this.props;

    const home = (
      <div className={classes.actions}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          component={Link}
          to="/"
          className={classes.button}
        >
          Acasă
        </Button>
        <Button
          variant="contained"
          color="default"
          fullWidth
          onClick={signOut}
          className={classes.button}
        >
          Deconectare
        </Button>
      </div>
    );

    return (
      <div>
        <Hidden xsDown implementation="css">
          <Drawer classes={{ paper: classes.drawerPaper }} anchor="left" variant="permanent">
            <div className={classes.toolbar} />
            {home}
            {children}
          </Drawer>
        </Hidden>
        <Hidden smUp implementation="css">
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            anchor="left"
            variant="temporary"
            open={mobileSidebar}
            onClose={toggleMobileSidebar}
          >
            <div className={classes.toolbar} />
            <Divider />
            {home}
            {children}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
