import { all, ForkEffect, takeLatest } from "redux-saga/effects";

import HueSaga from "./hue/HueSaga";

export default function* rootSaga() {
  const filteredSagas: ForkEffect[] = [
    takeLatest("GET_LIGHTS", HueSaga.getLights),
    takeLatest("GET_ROOMS", HueSaga.getRooms),
    takeLatest("SWITCH_ROOM", HueSaga.switchRoom)
  ];

  yield all(filteredSagas);
}
