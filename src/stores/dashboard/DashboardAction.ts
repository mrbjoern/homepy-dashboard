import { DashboardActionType, TOGGLE_DRAWER } from "./types";

export function toggleDrawer(): DashboardActionType {
  return { type: TOGGLE_DRAWER };
}
