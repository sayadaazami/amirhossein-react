import { actionNames } from "./actions";

const initState = {
  getUsers: {
    loading: false,
    data: [],
    error: null,
  },

  deleteUser: {
    loading: false,
    data: null,
    error: null,
  },
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionNames.GET_USERS:
      return { ...state, getUsers: { data: [], error: null, loading: true } };
    case actionNames.GET_USERS_SUCCESS:
      return {
        ...state,
        getUsers: { data: action.data, error: null, loading: false },
      };
    case actionNames.GET_USERS_FAIL:
      return {
        ...state,
        getUsers: {
          data: state.data,
          error: action.error,
          loading: false,
        },
      };

    case actionNames.DELETE_USER:
      return {
        ...state,
        deleteUser: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case actionNames.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          data: action.data,
        },
      };
    case actionNames.DELETE_USER_FAIL:
      return {
        ...state,
        deleteUser: {
          ...state.deleteUser,
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};
