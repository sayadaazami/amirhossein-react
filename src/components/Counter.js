import React, { useEffect, useState } from "react";
import withStorage from "../HOC/withStorage";
import withTheme from "../HOC/withTheme";

function Counter({ storage, theme }) {
  const [value, seValue] = useState(+(storage.getItem("value") || 0));

  useEffect(() => {
    storage.setItem("value", value);
  }, [value]);

  function handleIncrease() {
    seValue(value + 1);
  }

  function handleDecrease() {
    seValue(value - 1);
  }

  return (
    <section style={{ backgroundColor: theme.backgroundColor }}>
      <h1 style={{ color: theme.textColor }}>{value}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </section>
  );
}

export default withTheme(withStorage(Counter));
