import React from "react";

/*
function useState(value){
    var data = value;
    var setData = (changedValue) => {
        data = changedValue;

        console.log(data);
    };

    return [
        data,
        setData
    ];
}
*/

function StateFullFunctionComponent() {
  let [name, setName] = React.useState("Amir Hossein");
  let [age, setAge] = React.useState(31);

  React.useEffect(() => {
    console.log("name changed into " + name);
  }, [name]);

  React.useEffect(() => {
    console.log("age changed into " + age);
  }, [age]);

  React.useEffect(() => {
    console.log("some state changed", name, age);
  }, [name, age]);

  function changeName() {
    setName("sayad");
  }

  function changeAge() {
    setAge(50);
  }

  return (
    <section>
      <h1>
        salam {name} with age of {age}
      </h1>

      <button onClick={changeName}>change name</button>

      <button onClick={changeAge}>change age</button>
    </section>
  );
}

export default StateFullFunctionComponent;
