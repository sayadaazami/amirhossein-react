import { applyMiddleware, combineReducers, createStore } from "redux";
import { getUsersApi, deleteUserApi } from "../api/users";
import * as users from "./users";

const apiCallMiddleware = (store) => (next) => (action) => {
  console.log(action);
  const result = next(action);

  if (action.type === users.actionNames.GET_USERS) {
    getUsersApi();
  } else if (action.type === users.actionNames.DELETE_USER) {
    deleteUserApi(action.id);
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

store.dispatch(users.actions.deleteUser(1));
