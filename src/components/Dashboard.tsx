import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, Switch } from "react-router"; // react-router v4
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { RoomContainer } from "./hue";
import { default as TopBar } from "./TopBar";
import { default as SideBar } from "./SideBar";

const styles = (theme: any) => ({
  root: {
    display: "flex"
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
    <CssBaseline />
    <TopBar drawerOpen={props.drawerOpen} toggleDrawer={props.toggleDrawer} />
    <SideBar drawerOpen={props.drawerOpen} toggleDrawer={props.toggleDrawer} />
    <main className={props.classes.content}>
      <div className={props.classes.appBarSpacer} />
      <Switch>
        <Route exact path="/" render={() => <RoomContainer />} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
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
