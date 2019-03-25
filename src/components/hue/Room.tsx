import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    //textAlign: "center" as "center",
    color: theme.palette.text.secondary
  }
});

const Room = (props: { room: any; classes: any; key: any }) => (
  <div className={props.classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={props.classes.paper}>
          <h2>
            {props.room.name}
            <Switch
              checked={!props.room.state.all_on}
              onChange={() => console.log("toggle!")}
              value="State"
              color="primary"
            />
          </h2>
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Room);
