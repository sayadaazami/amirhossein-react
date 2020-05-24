import React from "react";

function TestWillUnmount(props) {
  let timerHandler = null;

  // componentDidMount
  React.useEffect(() => {
    timerHandler = setInterval(() => {
      console.log("bale");
    }, 300);
  }, []);

  // componentWillUnmount
  React.useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
      clearInterval(timerHandler);
    };
  }, []);

  return (
    <section>
      <h2>i am TestWillUnmount</h2>
    </section>
  );
}

export default TestWillUnmount;
