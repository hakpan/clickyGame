import React from "react";

const row = props =>
  <div className={`row${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default row;