import Axios from "axios";
import { actions } from "./actions";

export function getUsers() {
  return (dispatch) => {
    actions.getUsers();

    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(actions.getUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.getUsersFail(error));
      });
  };
}

export function deleteUser(id) {
  return (dispatch) => {
    actions.deleteUser();

    Axios.delete("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => {
        dispatch(actions.deleteUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(actions.deleteUserFail(error));
      });
  };
}
