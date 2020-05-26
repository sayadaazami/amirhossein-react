import React, { useMemo } from "react";
import Input from "./Input";

function MemoHook() {
  const [name, setName] = React.useState("sayad");

  //   const age = React.useMemo(function () {
  //     return prompt("Enter your age");
  //   }, []);

  //   const age = React.useMemo(
  //     function () {
  //       return prompt("Enter your age");
  //     },
  //     [name]
  //   );

  const nameChangeHandler = useMemo(() => {
    return () => setName("armin");
  }, []);

  return (
    <section>
      <h1>MemoHook</h1>
      {/* <p>age: {age}</p> */}

      <Input value={name} />

      <button onClick={nameChangeHandler}>change</button>
    </section>
  );
}

export default MemoHook;
