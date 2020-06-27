import { applyMiddleware, combineReducers, createStore } from "redux";
import reduxThunk from "redux-thunk";
import * as users from "./users";
import { getUsers, deleteUser } from "./users/thunk";

export const store = createStore(
  combineReducers({
    users: users.reducer,
  }),
  applyMiddleware(reduxThunk)
);

// do this in another file or react component
store.subscribe(() => console.log(store.getState()));
store.dispatch(getUsers());
store.dispatch(deleteUser(1));
