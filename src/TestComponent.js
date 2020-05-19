import React from "react";

export default function TestComponent(props) {
  return (
    <section>
      {props.children}

      <button onClick={(event) => props.onChange(0)}>reset</button>
    </section>
  );
}
