export default class HueReducer {
  private static readonly _initialState: any = {
    lights: {
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

  public static reducer(
    state: any = HueReducer._initialState,
    action: any
  ): any {
    switch (action.type) {

      case "GET_LIGHTS_SUCCESS":
        return {
          ...state,
          lights: {
            ...state.lights,
            byId: action.data,
            allIds: Object.keys(action.data)
          }
        };
      case "GET_ROOMS":
        return {
          ...state,
          rooms: {
            ...state.rooms,
            loading: true }
        }
      case "GET_ROOMS_SUCCESS":
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
      case "GET_ROOMS_FAILED":
        return {
          ...state,
          rooms: {
            ...state.rooms,
            loading: false,
            error: action.data,
          }
        }
      case "SWITCH_ROOM_SUCCESS":
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

  public static convertToArray(data: any) {
    return Object.keys(data).map(function(key) {
      return { ...data[key], id: key };
    });
  }
}
