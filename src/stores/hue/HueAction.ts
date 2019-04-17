export const GET_ROOMS = "GET_ROOMS";
export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
export const GET_ROOMS_FAILED = "GET_ROOMS_FAILED";
export const GET_LIGHTS = "GET_LIGHTS";
export const GET_LIGHTS_SUCCESS = "GET_LIGHTS_SUCCESS";
export const GET_LIGHTS_FAILED = "GET_LIGHTS_FAILED";

export const SWITCH_ROOM_SUCCESS = "SWITCH_ROOM_SUCCESS";

interface GetRoomsAction {
  type: typeof GET_ROOMS;
}

interface GetRoomsSuccessAction {
  type: typeof GET_ROOMS_SUCCESS;
  data: any;
}

interface GetRoomsFailedAction {
  type: typeof GET_ROOMS_FAILED;
  data: string;
}

interface GetLightsAction {
  type: typeof GET_LIGHTS;
}

interface GetLightsSuccessAction {
  type: typeof GET_LIGHTS_SUCCESS;
  data: any;
}

interface GetLightsFailedAction {
  type: typeof GET_LIGHTS_FAILED;
  data: string;
}

interface SwitchRoomSuccessAction {
  type: typeof SWITCH_ROOM_SUCCESS;
  data: number;
}

export type HueActionType =
  | GetRoomsAction
  | GetRoomsSuccessAction
  | GetRoomsFailedAction
  | GetLightsAction
  | GetLightsSuccessAction
  | GetLightsFailedAction
  | SwitchRoomSuccessAction;

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
