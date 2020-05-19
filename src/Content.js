import React from "react";

export default function (props) {
  console.log(props);
  return <section>{props.children}</section>;
}
