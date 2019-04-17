import { DashboardActionType, DashboardState, TOGGLE_DRAWER } from "./types";

export const initialState: DashboardState = {
  drawerOpen: false
};

export function dashboardReducer(
  state = initialState,
  action: DashboardActionType
): DashboardState {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return { ...state, drawerOpen: !state.drawerOpen };
    default:
      return { ...state };
  }
}
