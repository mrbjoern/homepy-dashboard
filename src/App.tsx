import React from "react";
import { connect } from "react-redux";

import { Dashboard } from "./components";

// import "./App.css";

const App = (props: {
  lights: [];
  rooms: [];
  getLights: () => void;
  getRooms: () => void;
}) => (
  <div className="App">
    <Dashboard />
  </div>
);

export default connect(
  (state: { hueReducer: any }) => ({
    lights: state.hueReducer.lights,
    rooms: state.hueReducer.rooms
  }),
  dispatch => ({
    getLights: () => {
      dispatch({
        type: "GET_LIGHTS"
      });
    },
    getRooms: () => {
      dispatch({
        type: "GET_ROOMS"
      });
    }
  })
)(App);
