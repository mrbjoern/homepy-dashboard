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

  public static *switchRoom(action: any) {
    console.log(action.data);
    try {
      const response: any = yield call(
        HueService.switchRoom,
        action.data.roomId,
        action.data.action
      );
      yield put({ type: "SWITCH_ROOM_SUCCESS", data: action.data.roomId });
    } catch (error) {
      yield put({ type: "SWITCH_ROOM_FAILED", data: error.message });
    }
  }
}
