import { actions as globalActions } from "../global";

const userActionNames = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
};

const initState = [{ id: 1, name: "sayad", age: 31 }];

export const actions = {
  ADD_USER: (user) => ({ type: userActionNames.ADD_USER, user }),
  DELETE_USER: (id) => ({ type: userActionNames.DELETE_USER, id }),
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case globalActions.RESET:
      return initState;
    case userActionNames.ADD_USER:
      return [...state, action.user];
    case userActionNames.DELETE_USER:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};
