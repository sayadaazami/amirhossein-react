import React from "react";

function Component1(props) {
  // componentDidMount
  React.useEffect(() => {
    console.log("mounted");
  }, []);

  // componentWillMount
  React.useEffect(() => {
    // must return a function
    return () => {
      console.log("unMounted");
    };
  }, []);

  // componentDidUpdate FOR name
  React.useEffect(() => {
    console.log("NAME updated");
  }, [props.name]);

  // componentDidUpdate FOR age
  React.useEffect(() => {
    console.log("AGE updated");
  }, [props.age]);

  // componentDidUpdate FOR props.name, props.age
  React.useEffect(() => {
    console.log("AGE OR NAME updated");
  }, [props.name, props.age]);

  // componentDidUpdate FOR ALLLL props
  React.useEffect(() => {
    console.log("SOME props updated");
  }, [props]);

  // DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOnt use BUT [log]
  React.useEffect(() => {
    console.log("EVERY CHANGE");
  });

  return (
    <section>
      <h2>
        salam {props.name} with age of {props.age}
      </h2>
    </section>
  );
}

export default Component1;
