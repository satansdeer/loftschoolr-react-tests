import { put, take } from "redux-saga/effects";
import { CHOOSE_NAME, updateUser } from "./actions";

export function* changeNameSaga() {
  const action = yield take(CHOOSE_NAME);
  yield put(updateUser(action.payload.name));
}
