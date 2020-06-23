import { createStore, combineReducers } from "redux";
import * as counter from "./counter";
import * as users from "./users";
import * as global from "./global";

const store = createStore(
  combineReducers({
    counter: counter.reducer,
    users: users.reducer,
  })
);

function customDispatch(action) {
  // before
  console.log("before", action, store.getState());

  store.dispatch(action);

  // after
  console.log("after", store.getState());
}

customDispatch(counter.actions.INC());
store.dispatch(counter.actions.INC());
customDispatch(counter.actions.ADD(5));
customDispatch(users.actions.ADD_USER({ id: 18, name: "elahe", age: 50 }));
customDispatch(users.actions.DELETE_USER(1));
customDispatch(counter.actions.SUB(3));
customDispatch(global.actions.RESET());
customDispatch(counter.actions.INC());
