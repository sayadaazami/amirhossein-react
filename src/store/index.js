import { applyMiddleware, combineReducers, createStore } from "redux";
import { getUsersApi } from "../api/users";
import * as users from "./users";

const apiCallMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  if (action.type === users.userActionNames.GET_USERS) {
    getUsersApi();
  }

  return result;
};

export const store = createStore(
  combineReducers({
    users: users.reducer,
  }),
  applyMiddleware(apiCallMiddleware)
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(users.actions.getUsers());
