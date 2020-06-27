export const actionNames = {
  GET_USERS: "GET_USERS",
  GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
  GET_USERS_FAIL: "GET_USERS_FAIL",

  DELETE_USER: "DELETE_USER",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAIL: "DELETE_USER_FAIL",
};

export const actions = {
  getUsers: () => {
    return { type: actionNames.GET_USERS };
  },
  getUsersSuccess: (data) => {
    return { type: actionNames.GET_USERS_SUCCESS, data };
  },
  getUsersFail: (error) => {
    return { type: actionNames.GET_USERS_FAIL, error };
  },

  deleteUser: (id) => {
    return { type: actionNames.DELETE_USER, id };
  },
  deleteUserSuccess: (data) => {
    return { type: actionNames.DELETE_USER_SUCCESS, data };
  },
  deleteUserFail: (error) => {
    return { type: actionNames.DELETE_USER_FAIL, error };
  },
};
