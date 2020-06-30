import React from "react";
import "./store";
import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
