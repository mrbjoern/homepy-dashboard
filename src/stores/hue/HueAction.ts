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

export function getRooms(): HueActionType {
  return { type: GET_ROOMS };
}

export function getRoomsSuccess(data: any): HueActionType {
  return { type: GET_ROOMS_SUCCESS, data };
}

export function getRoomsFailed(data: string): HueActionType {
  return { type: GET_ROOMS_FAILED, data };
}

export function getLights(): HueActionType {
  return { type: GET_LIGHTS };
}

export function getLightsSuccess(data: any): HueActionType {
  return { type: GET_LIGHTS_SUCCESS, data };
}

export function getLightsFailed(data: string): HueActionType {
  return { type: GET_LIGHTS_FAILED, data };
}

export function switchRoomSuccess(data: number): HueActionType {
  return { type: SWITCH_ROOM_SUCCESS, data };
}
