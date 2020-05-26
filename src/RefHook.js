import React from "react";
import Input from "./Input";

function RefHook() {
  const [name, setName] = React.useState("sayad");
  const myInput = React.useRef(undefined);

  React.useEffect(() => {
    myInput.current.onclick = function () {
      alert("bale");
    };
  }, []);

  return (
    <section>
      <Input value={name} innerRef={myInput} />

      <button onClick={() => setName("armin")}>change</button>
    </section>
  );
}

export default RefHook;
