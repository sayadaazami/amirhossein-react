import React from "react";
// import Component1 from "./Component1";
// import TestWillUnmount from "./TestWillUnmount";
import StateFullFunctionComponent from "./StateFullFunctionComponent";

export default class App extends React.Component {
  state = {
    name: "armin",
    age: 23,
    showUnmount: true,
  };

  render() {
    return (
      <section>
        {/* <Component1 name={this.state.name} age={this.state.age} />
        <button onClick={() => this.setState({ name: "elahe" })}>
          change name
        </button>

        <button onClick={() => this.setState({ age: 24 })}>change age</button> */}

        {/* {this.state.showUnmount ? <TestWillUnmount /> : null}

        <button onClick={() => this.setState({ showUnmount: false })}>
          remove testUnmountComponent
        </button> */}

        <StateFullFunctionComponent />
      </section>
    );
  }
}
