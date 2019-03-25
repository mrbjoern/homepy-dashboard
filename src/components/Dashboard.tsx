import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { RoomContainer } from "./hue";

const drawerWidth = 240;

const styles = (theme: any) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
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
  },
  drawerPaper: {
    position: "relative" as "relative",
    whiteSpace: "nowrap" as "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden" as "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  }
});

const Dashboard = (props: {
  drawerOpen: boolean;
  classes: any;
  toggleDrawer: () => void;
}) => (
  <div className={props.classes.root}>
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
    <Drawer
      variant="permanent"
      open={props.drawerOpen}
      classes={{
        paper: classNames(
          props.classes.drawerPaper,
          !props.drawerOpen && props.classes.drawerPaperClose
        )
      }}
    >
      <div className={props.classes.toolbarIcon}>
        <IconButton onClick={props.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>
        <div>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItem>
        </div>
      </List>
      <Divider />
    </Drawer>
    <main className={props.classes.content}>
      <div className={props.classes.appBarSpacer} />
      <RoomContainer />
    </main>
  </div>
);

export default connect(
  (state: { dashboardReducer: any }) => ({
    drawerOpen: state.dashboardReducer.drawerOpen
  }),
  dispatch => ({
    toggleDrawer: () => {
      dispatch({
        type: "TOGGLE_DRAWER"
      });
    }
  })
)(withStyles(styles)(Dashboard));
