import { applyMiddleware, combineReducers, compose, createStore } from "redux";
// import reduxThunk from "redux-thunk";
// import { deleteUser, getUsers } from "./users/thunk";
import createSagaMiddleware from "redux-saga";
import * as users from "./users";
import { actions as userActions } from "./users/actions";
import { userSagas } from "./users/saga";

// const middlewares = [reduxThunk];
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
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

sagaMiddleware.run(userSagas);

store.dispatch(userActions.getUsers());
store.dispatch(userActions.deleteUser(1));
// // do this in another file or react component
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(getUsers());
// store.dispatch(deleteUser(1));
