import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/Info";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const styles = (theme: any) => ({
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
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  }
});

const ListItemLink = (props: { to: string; text: string; icon: any }) => (
  <Link to={props.to}>
    <ListItem button>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  </Link>
);

const SideBar = (props: {
  drawerOpen: boolean;
  classes: any;
  toggleDrawer: () => void;
}) => (
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
    <Divider />
    <List>
      <ListItemLink to="/" text="Dashboard" icon={<DashboardIcon />} />
      <ListItemLink to="/info" text="Info" icon={<InfoIcon />} />
    </List>
    <Divider />
  </Drawer>
);

export default withStyles(styles)(SideBar);
