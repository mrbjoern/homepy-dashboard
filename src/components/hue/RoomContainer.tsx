import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { Room } from "./";

const RoomContainer = (props: {
  rooms: any;
  getRooms: () => void;
  switchRoom: (roomId: string, action: any) => void;
}) => (
  <div>
    <Button variant="contained" color="primary" onClick={props.getRooms}>
      Get lights
    </Button>
    {Object.keys(props.rooms).map(function(key) {
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
    rooms: state.hueReducer.rooms.byId
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
