export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER;
}

export type DashboardActionType = ToggleDrawerAction;

export type DashboardState = {
  drawerOpen: boolean;
};
