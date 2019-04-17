// import actions
import { call, put } from "redux-saga/effects";
import HueService from "./HueService";

import {
  getRoomsSuccess,
  getRoomsFailed,
  getLightsSuccess,
  getLightsFailed,
  switchRoomSuccess
} from "./HueAction";

export default class HueSaga {
  public static *getLights() {
    try {
      const response: any = yield call(HueService.getLights);
      yield put(getLightsSuccess(response));
    } catch (error) {
      yield put(getLightsFailed(error.message));
    }
  }

  public static *getRooms() {
    try {
      const response: any = yield call(HueService.getRooms);
      yield put(getRoomsSuccess(response));
    } catch (error) {
      console.log(error);
      yield put(getRoomsFailed(error.message));
    }
  }

  public static *switchRoom(action: any) {
    try {
      const response: any = yield call(
        HueService.switchRoom,
        action.data.roomId,
        action.data.action
      );
      yield put(switchRoomSuccess(action.data.roomId));
    } catch (error) {
      yield put({ type: "SWITCH_ROOM_FAILED", data: error.message });
    }
  }
}
