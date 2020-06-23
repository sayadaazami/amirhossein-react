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

function overrideDispatch(functions) {
  functions.reverse().forEach((func) => {
    const oldDispatch = store.dispatch;
    store.dispatch = (action) => func(action, oldDispatch);
  });
}

overrideDispatch([
  function (action, oldDispatch) {
    // before
    console.log("before1", action, store.getState());

    oldDispatch(action);

    // after
    console.log("after1", store.getState());
  },
  function (action, oldDispatch) {
    // before
    console.log("before2", action, store.getState());

    oldDispatch(action);

    // after
    console.log("after2", store.getState());
  },
]);

store.dispatch(counter.actions.INC());
store.dispatch(counter.actions.INC());
store.dispatch(counter.actions.ADD(5));
store.dispatch(users.actions.ADD_USER({ id: 18, name: "elahe", age: 50 }));
store.dispatch(users.actions.DELETE_USER(1));
store.dispatch(counter.actions.SUB(3));
store.dispatch(global.actions.RESET());
store.dispatch(counter.actions.INC());
