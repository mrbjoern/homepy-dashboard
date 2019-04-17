import {
  getRooms,
  getRoomsSuccess,
  getRoomsFailed,
  getLights,
  getLightsSuccess,
  getLightsFailed,
  switchRoomSuccess
} from "./HueAction";

import {
  HueActionType,
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILED,
  GET_LIGHTS,
  GET_LIGHTS_SUCCESS,
  GET_LIGHTS_FAILED,
  SWITCH_ROOM_SUCCESS
} from "./types";

describe("HueActions", () => {
  it("should create GET_ROOMS action", () => {
    const expectedAction: HueActionType = { type: GET_ROOMS };
    expect(getRooms()).toEqual(expectedAction);
  });

  it("should create GET_ROOMS_SUCCESS action", () => {
    const data = [];
    const expectedAction: HueActionType = {
      type: GET_ROOMS_SUCCESS,
      data: data
    };
    expect(getRoomsSuccess(data)).toEqual(expectedAction);
  });

  it("should create GET_ROOMS_FAILED action", () => {
    const data = "Error";
    const expectedAction: HueActionType = {
      type: GET_ROOMS_FAILED,
      data: data
    };
    expect(getRoomsFailed(data)).toEqual(expectedAction);
  });

  it("should create GET_LIGHTS action", () => {
    const expectedAction: HueActionType = { type: GET_LIGHTS };
    expect(getLights()).toEqual(expectedAction);
  });

  it("should create GET_LIGHTS_SUCCESS action", () => {
    const data = [];
    const expectedAction: HueActionType = {
      type: GET_LIGHTS_SUCCESS,
      data: data
    };
    expect(getLightsSuccess(data)).toEqual(expectedAction);
  });

  it("should create GET_LIGHTS_FAILED action", () => {
    const data = "Error";
    const expectedAction: HueActionType = {
      type: GET_LIGHTS_FAILED,
      data: data
    };
    expect(getLightsFailed(data)).toEqual(expectedAction);
  });

  it("should create SWITCH_ROOM_SUCCESS action", () => {
    const data = 1;
    const expectedAction: HueActionType = {
      type: SWITCH_ROOM_SUCCESS,
      data: data
    };
    expect(switchRoomSuccess(data)).toEqual(expectedAction);
  });
});
