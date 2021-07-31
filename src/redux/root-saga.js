import { all, call } from "redux-saga/effects";
import { robotSagas } from "./robots/robots.sagas";


export default function* rootSaga() {
  yield all([call(robotSagas)]);
}
