import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import { Room } from "./";

const RoomContainer = (props: { rooms: []; getRooms: () => void }) => (
  <div>
    <Button variant="contained" color="primary" onClick={props.getRooms}>
      Get lights
    </Button>

    {props.rooms.map((room, key) => {
      return <Room room={room} key={key} />;
    })}
  </div>
);

export default connect(
  (state: { hueReducer: any }) => ({
    rooms: state.hueReducer.rooms
  }),
  dispatch => ({
    getRooms: () => {
      dispatch({
        type: "GET_ROOMS"
      });
    }
  })
)(RoomContainer);
