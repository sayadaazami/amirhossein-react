import React from "react";
import { createStore } from "redux";

const counterActionNames = {
  RESET: "RESET",
  INC: "INC",
  DEC: "DEC",
  ADD: "ADD",
  SUB: "SUB",
};

const actions = {
  RESET: () => ({ type: counterActionNames.RESET }),
  INC: () => ({ type: counterActionNames.INC }),
  DEC: () => ({ type: counterActionNames.DEC }),
  ADD: (value) => ({ type: counterActionNames.ADD, value }),
  SUB: (value) => ({ type: counterActionNames.SUB, value }),
};

const initCounterState = 0;

const counterReducer = (state = initCounterState, action) => {
  switch (action.type) {
    case counterActionNames.RESET:
      return initCounterState;
    case counterActionNames.INC:
      return state + 1;
    case counterActionNames.DEC:
      return state - 1;
    case counterActionNames.ADD:
      return state + (action.value || 0);
    case counterActionNames.SUB:
      return state - (action.value || 0);
    default:
      return state;
  }
};

const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.INC());
store.dispatch(actions.ADD(5));
store.dispatch(actions.SUB(3));
store.dispatch(actions.RESET());
store.dispatch(actions.INC());

function App() {
  return <div className="App">App</div>;
}

export default App;
