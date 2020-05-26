import React from "react";

function Input(props) {
  return <input value={props.value} ref={props.innerRef} />;
}

export default Input;
