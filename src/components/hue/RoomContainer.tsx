import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";

import { Room } from "./";
import { Cards } from "../dashboard";

const RoomContainer = (props: {
  rooms: any;
  loading: boolean;
  error: string | undefined;
  getRooms: () => void;
  switchRoom: (roomId: string, action: any) => void;
}) => (
  <div>
    <Typography gutterBottom variant="h2" color="inherit">
      Dashboard
    </Typography>
    <Cards />

    {props.error != undefined && <div>{props.error}</div>}
    {props.loading == true && <CircularProgress />}
    {!props.loading &&
      Object.keys(props.rooms).map(function(key) {
        if (props.rooms[key].type == "Room") {
          return (
            <Room
              key={key}
              room={props.rooms[key]}
              id={key}
              switchRoom={props.switchRoom}
            />
          );
        }
      })}
  </div>
);

export default connect(
  (state: { hueReducer: any }) => ({
    rooms: state.hueReducer.rooms.byId,
    loading: state.hueReducer.rooms.loading,
    error: state.hueReducer.rooms.error
  }),
  dispatch => ({
    getRooms: () => {
      dispatch({
        type: "GET_ROOMS"
      });
    },
    switchRoom: (roomId: string, action: any) => {
      dispatch({
        type: "SWITCH_ROOM",
        data: { roomId: roomId, action: action }
      });
    }
  })
)(RoomContainer);
