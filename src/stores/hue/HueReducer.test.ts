import {
  HueActionType,
  HueRoom,
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILED,
  GET_LIGHTS,
  GET_LIGHTS_SUCCESS,
  GET_LIGHTS_FAILED,
  SWITCH_ROOM_SUCCESS
} from "./types";
import { hueReducer, initialState } from "./HueReducer";
import {
  getRooms,
  getRoomsSuccess,
  getRoomsFailed,
  getLights,
  getLightsSuccess,
  getLightsFailed,
  switchRoomSuccess
} from "./HueAction";

describe("HueReducer", () => {
  it("should return initial state", () => {
    expect(hueReducer(undefined, {})).toEqual(initialState);
  });

  it("should hande GET_ROOMS", () => {
    expect(hueReducer(initialState, getRooms()).rooms.loading).toEqual(true);
  });

  it("should handle GET_ROOMS_SUCCESS", () => {
    const rooms = [{ id: 1 }];
    expect(hueReducer(initialState, getRoomsSuccess(rooms)).rooms.byId).toEqual(
      rooms
    );
  });

  it("should handle GET_ROOMS_FAILED", () => {
    const errorMessage = "Something went wrong";
    expect(
      hueReducer(initialState, getRoomsFailed(errorMessage)).rooms.error
    ).toEqual(errorMessage);
  });

  it("should hande GET_LIGHTS", () => {
    expect(hueReducer(initialState, getLights()).lights.loading).toEqual(true);
  });

  it("should handle GET_LIGHTS_SUCCESS", () => {
    const lights = [{ id: 1 }];
    expect(
      hueReducer(initialState, getLightsSuccess(lights)).lights.byId
    ).toEqual(lights);
  });

  it("should handle GET_LIGHTS_FAILED", () => {
    const errorMessage = "Something went wrong";
    expect(
      hueReducer(initialState, getLightsFailed(errorMessage)).lights.error
    ).toEqual(errorMessage);
  });

  it("should handle SWITCH_ROOM_SUCCESS", () => {
    const state = {
      ...initialState,
      rooms: {
        ...initialState.rooms,
        byId: {
          ...initialState.rooms.byId,
          "1": {
            lights: ["1", "2"],
            name: "Kitchen",
            type: "Room",
            action: {
              on: true
            }
          }
        }
      }
    };
    expect(
      hueReducer(state, switchRoomSuccess(1)).rooms.byId["1"].action.on
    ).toEqual(false);
  });
});
