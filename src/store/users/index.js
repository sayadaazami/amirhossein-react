export const userActionNames = {
  GET_USERS: "GET_USERS",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAIL: "GET_USERS_FAIL",
};

const initState = {
  loading: false,
  data: [],
  error: null,
};

export const actions = {
  getUsers: () => {
    return { type: userActionNames.GET_USERS };
  },
  getUsersSuccess: (data) => {
    return { type: userActionNames.GET_USERS_SUCCESS, data };
  },
  getUsersFail: (error) => {
    return { type: userActionNames.GET_USERS_FAIL, error };
  },
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case userActionNames.GET_USERS:
      return { data: [], error: null, loading: true };
    case userActionNames.GET_USERS_SUCCESS:
      return { data: action.data, error: null, loading: false };
    case userActionNames.GET_USERS_FAIL:
      return { data: state.data, error: action.error, loading: false };
    default:
      return state;
  }
};
