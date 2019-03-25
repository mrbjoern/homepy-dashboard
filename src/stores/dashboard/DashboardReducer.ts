export default class DashboardReducer {
  private static readonly _initialState: any = {
    drawerOpen: false
  };

  public static reducer(
    state: any = DashboardReducer._initialState,
    action: any
  ): any {
    switch (action.type) {
      case "TOGGLE_DRAWER":
        return { ...state, drawerOpen: !state.drawerOpen };

      default:
        return { ...state };
    }
  }
}
