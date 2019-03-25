export default class HueReducer {
  private static readonly _initialState: any = {
    lights: [],
    rooms: []
  };

  public static reducer(
    state: any = HueReducer._initialState,
    action: any
  ): any {
    switch (action.type) {
      case "GET_LIGHTS_SUCCESS":
        return { ...state, lights: HueReducer.convertToArray(action.data) };
      case "GET_ROOMS_SUCCESS":
        return { ...state, rooms: HueReducer.convertToArray(action.data) };
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
