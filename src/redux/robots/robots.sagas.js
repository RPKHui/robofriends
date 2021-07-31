import { takeLatest, call, all, put } from "redux-saga/effects";

import { fetchRobotsSuccess, fetchRobotsFailure } from "./robots.actions";

import { RobotActionTypes } from "./robots.types";

export function* fetchRobotsAsync() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const robots = yield response.json();
    yield put(fetchRobotsSuccess(robots));
  } catch (err) {
    yield put(fetchRobotsFailure(err));
  }
}

export function* fetchRobotsStart() {
  yield takeLatest(RobotActionTypes.FETCH_ROBOTS_START, fetchRobotsAsync);
}

export function* robotSagas() {
  yield all([call(fetchRobotsStart)]);
}
