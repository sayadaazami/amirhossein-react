import { store } from "../../store";
import * as users from "../../store/users";
import axios from "axios";

export function getUsersApi() {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      store.dispatch(users.actions.getUsersSuccess(response.data));
    })
    .catch((error) => {
      store.dispatch(users.actions.getUsersFail(error));
    });
}
