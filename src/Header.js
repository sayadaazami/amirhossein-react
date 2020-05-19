import React from "react";

export default function (props) {
  console.log(props);
  return (
    <header>
      this is header for user {props.name} with age of {props.age}
    </header>
  );
}
