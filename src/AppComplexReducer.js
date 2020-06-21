import React from "react";
import { createStore } from "redux";

const actionNames = {
  RESET: "RESET",
  INC: "INC",
  DEC: "DEC",
  ADD: "ADD",
  SUB: "SUB",

  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  RESET_USERS: "RESET_USERS",
};

const actions = {
  RESET: () => ({ type: actionNames.RESET }),
  INC: () => ({ type: actionNames.INC }),
  DEC: () => ({ type: actionNames.DEC }),
  ADD: (value) => ({ type: actionNames.ADD, value }),
  SUB: (value) => ({ type: actionNames.SUB, value }),

  ADD_USER: (user) => ({ type: actionNames.ADD_USER, user }),
  DELETE_USER: (id) => ({ type: actionNames.DELETE_USER, id }),
  RESET_USERS: () => ({ type: actionNames.RESET_USERS }),
};

const initState = {
  counter: 0,
  users: [{ id: 1, name: "sayad", age: 31 }],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionNames.RESET:
      return initState;

    case actionNames.INC:
      return { ...state, counter: state.counter + 1 };
    case actionNames.DEC:
      return { ...state, counter: state.counter - 1 };
    case actionNames.ADD:
      return { ...state, counter: state.counter + (action.value || 0) };
    case actionNames.SUB:
      return { ...state, counter: state.counter - (action.value || 0) };

    case actionNames.ADD_USER:
      return { ...state, users: [...state.users, action.user] };
    case actionNames.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.id),
      };
    case actionNames.RESET_USERS:
      return { ...state, users: initState.users };

    default:
      return state;
  }
};

const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(actions.INC());
store.dispatch(actions.ADD(5));
store.dispatch(actions.ADD_USER({ id: 18, name: "elahe", age: 50 }));
store.dispatch(actions.DELETE_USER(1));
store.dispatch(actions.SUB(3));
store.dispatch(actions.RESET());
store.dispatch(actions.INC());

function App() {
  return <div className="App">App</div>;
}

export default App;
