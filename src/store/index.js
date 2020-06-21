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

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(counter.actions.INC());
store.dispatch(counter.actions.ADD(5));
store.dispatch(users.actions.ADD_USER({ id: 18, name: "elahe", age: 50 }));
store.dispatch(users.actions.DELETE_USER(1));
store.dispatch(counter.actions.SUB(3));
store.dispatch(global.actions.RESET());
store.dispatch(counter.actions.INC());
