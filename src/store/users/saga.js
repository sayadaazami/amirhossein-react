import { takeLatest, call, put } from "redux-saga/effects";
import Axios from "axios";

import { actionNames, actions } from "./actions";

function* getUsersSaga(action) {
  try {
    const response = yield call(
      Axios.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put(actions.getUsersSuccess(response.data));
  } catch (error) {
    yield put(actions.getUsersFail(error));
  }
}

function* deleteUserSaga(action) {
  try {
    const response = yield call(
      Axios.delete,
      `https://jsonplaceholder.typicode.com/users/${action.id}`
    );
    yield put(actions.deleteUserSuccess(response.data));
  } catch (error) {
    yield put(actions.deleteUserFail(error));
  }
}

export function* userSagas() {
  yield takeLatest(actionNames.GET_USERS, getUsersSaga);
  yield takeLatest(actionNames.DELETE_USER, deleteUserSaga);
}
