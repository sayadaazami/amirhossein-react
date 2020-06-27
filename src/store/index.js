import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import * as users from "./users";
import { deleteUser, getUsers } from "./users/thunk";

const middlewares = [reduxThunk];
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

export const store = createStore(
  combineReducers({
    users: users.reducer,
  }),
  enhancer
);

// do this in another file or react component
store.subscribe(() => console.log(store.getState()));
store.dispatch(getUsers());
store.dispatch(deleteUser(1));
