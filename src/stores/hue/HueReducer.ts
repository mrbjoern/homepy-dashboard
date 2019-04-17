import {
  HueActionType,
  HueState,
  GET_ROOMS,
  GET_ROOMS_SUCCESS,
  GET_ROOMS_FAILED,
  GET_LIGHTS,
  GET_LIGHTS_SUCCESS,
  GET_LIGHTS_FAILED,
  SWITCH_ROOM_SUCCESS
} from "./types";

function convertToArray(data: any) {
  return Object.keys(data).map(function(key) {
    return { ...data[key], id: key };
  });
}

export const initialState: HueState = {
  lights: {
    loading: false,
    error: undefined,
    byId: {},
    allIds: []
  },
  rooms: {
    loading: false,
    error: undefined,
    byId: {},
    allIds: []
  }
};

export function hueReducer(
  state = initialState,
  action: HueActionType
): HueState {
  switch (action.type) {
    case GET_LIGHTS:
      return {
        ...state,
        lights: {
          ...state.lights,
          loading: true
        }
      };
    case GET_LIGHTS_SUCCESS:
      return {
        ...state,
        lights: {
          ...state.lights,
          loading: false,
          error: undefined,
          byId: action.data,
          allIds: Object.keys(action.data)
        }
      };
    case GET_LIGHTS_FAILED:
      return {
        ...state,
        lights: {
          ...state.lights,
          loading: false,
          error: action.data
        }
      };
    case GET_ROOMS:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          loading: true
        }
      };
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          loading: false,
          error: undefined,
          byId: action.data,
          allIds: Object.keys(action.data)
        }
      };
    case GET_ROOMS_FAILED:
      return {
        ...state,
        rooms: {
          ...state.rooms,
          loading: false,
          error: action.data
        }
      };
    case SWITCH_ROOM_SUCCESS:
      const actionState = state.rooms.byId[action.data].action;
      return {
        ...state,
        rooms: {
          ...state.rooms,
          byId: {
            ...state.rooms.byId,
            [action.data]: {
              ...state.rooms.byId[action.data],
              action: {
                ...state.rooms.byId[action.data].action,
                on: !actionState.on
              }
            }
          }
        }
      };
    default:
      return { ...state };
  }
}
