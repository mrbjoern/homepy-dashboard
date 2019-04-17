import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = (theme: any) => ({
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  }
});

const TopBar = (props: {
  drawerOpen: boolean;
  classes: any;
  toggleDrawer: () => void;
}) => (
  <AppBar
    position="absolute"
    className={classNames(
      props.classes.appBar,
      props.drawerOpen && props.classes.appBarShift
    )}
  >
    <Toolbar
      className={props.classes.toolbar}
      disableGutters={!props.drawerOpen}
    >
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        onClick={props.toggleDrawer}
        className={classNames(
          props.classes.menuButton,
          props.drawerOpen && props.classes.menuButtonHidden
        )}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={props.classes.title}
      >
        HomyPy Dashboard
      </Typography>
      <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(TopBar);
