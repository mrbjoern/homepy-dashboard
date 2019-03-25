// import actions
import { call, put } from "redux-saga/effects";
import HueService from "./HueService";

export default class HueSaga {
  public static *getLights() {
    try {
      const response: any = yield call(HueService.getLights);
      yield put({ type: "GET_LIGHTS_SUCCESS", data: response });
    } catch (error) {
      yield put({ type: "GET_LIGHTS_FAILED", data: error.message });
    }
  }

  public static *getRooms() {
    try {
      const response: any = yield call(HueService.getRooms);
      yield put({ type: "GET_ROOMS_SUCCESS", data: response });
    } catch (error) {
      yield put({ type: "GET_ROOMS_FAILED", data: error.message });
    }
  }
}
