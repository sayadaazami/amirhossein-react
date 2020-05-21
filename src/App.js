import React from "react";

export default class App extends React.Component {
  state = {
    value: 0,
    otherValue: this.props.name,
  };

  incValue = () => this.setState((state) => ({ value: state.value + 1 }));

  resetValue = () => this.setState({ value: 0 });

  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  render() {
    return (
      <section>
        <header>
          <h1>{this.props.name}</h1>
        </header>

        <div>value: {this.state.value}</div>
        <div>otherValue: {this.state.otherValue}</div>

        <button onClick={this.incValue}>inc</button>
        <button onClick={this.resetValue}>reset</button>
        <button onClick={() => this.forceUpdate()}>force</button>
      </section>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
    //کل api ها اینجا صدا زده میشه
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
  }

  shouldComponentUpdate(nextProps, nextStates) {
    console.log("shouldComponentUpdate", nextProps, nextStates);

    return true;
  }

  componentWillUpdate(nextProps, nextStates) {
    console.log("componentWillUpdate", nextProps, nextStates);
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log("componentDidUpdate", prevProps, prevStates);
    //کل api ها اینجا صدا زده میشه
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
