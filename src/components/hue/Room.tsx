import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme: any) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    //textAlign: "center" as "center",
    color: theme.palette.text.secondary
  }
});

const Room = (props: {
  room: any;
  id: string;
  classes: any;
  switchRoom: (roomId: string, action: any) => void;
}) => (
  <div className={props.classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={props.classes.paper}>
          <Typography variant="h5" color="inherit">
            {props.room.name}
          </Typography>
          <FormControlLabel
            label="Light state"
            control={
              <Switch
                checked={props.room.action.on}
                onChange={() => props.switchRoom(props.id, props.room.action)}
                value="State"
                color="primary"
              />
            }
          />
        </Paper>
      </Grid>
    </Grid>
  </div>
);

export default withStyles(styles)(Room);
