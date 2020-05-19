import React from "react";
import TestComponent from "./TestComponent";

export default class App extends React.Component {
  state = {
    value: 0,
  };

  handleChildPropChange = (data) => {
    console.log(data);
    // this.state = data; // naaaaaaaaaaaaaaaaaaaaaa!

    this.setState({
      value: data,
    });
  };

  render() {
    return (
      <section>
        <TestComponent onChange={this.handleChildPropChange}>
          man TestComponent am
        </TestComponent>

        <div>{this.state.value}</div>

        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          myButton
        </button>
      </section>
    );
  }
}
