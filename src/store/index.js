import { applyMiddleware, combineReducers, createStore } from "redux";
import * as counter from "./counter";
import * as global from "./global";
import * as users from "./users";

const logger = (store) => (next) => (action) => {
  console.log("before", action, store.getState());
  const result = next(action);
  console.log("after", store.getState());

  return result;
};

const logger2 = (store) => (next) => (action) => {
  console.log("before2", action, store.getState());
  const result = next(action);
  console.log("after2", store.getState());

  return result;
};

const store = createStore(
  combineReducers({
    counter: counter.reducer,
    users: users.reducer,
  }),
  applyMiddleware(logger, logger2)
);

store.dispatch(counter.actions.INC());
store.dispatch(counter.actions.INC());
store.dispatch(counter.actions.ADD(5));
store.dispatch(users.actions.ADD_USER({ id: 18, name: "elahe", age: 50 }));
store.dispatch(users.actions.DELETE_USER(1));
store.dispatch(counter.actions.SUB(3));
store.dispatch(global.actions.RESET());
store.dispatch(counter.actions.INC());
