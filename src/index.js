import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

class BaseApp extends React.Component {
  state = { name: "myapp 1" };

  rename = () => {
    this.setState({ name: "new name" });
  };

  render() {
    return (
      <main>
        <App name={this.state.name} />

        <button onClick={this.rename}>rename</button>
      </main>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BaseApp />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
