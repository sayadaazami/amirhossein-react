import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Header from "./Header";
import Footer from "./Footer";

ReactDOM.render(
  <React.StrictMode>
    {Header}
    <p>dasdasdas</p>
    {Footer}
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
