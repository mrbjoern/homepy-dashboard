import React from "react";

const Light = (props: { key: number; id: number; state: { on: boolean } }) => (
  <div>
    <p>Id: {props.id}</p>
    <p>State: {props.state.on ? "on" : "off"}</p>
  </div>
);

export default Light;
