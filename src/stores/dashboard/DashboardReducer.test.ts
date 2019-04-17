import { dashboardReducer, initialState } from "./DashboardReducer";
import { toggleDrawer } from "./DashboardAction";

describe("DashboardReducer", () => {
  it("should return initial state", () => {
    expect(dashboardReducer(undefined, {})).toEqual(initialState);
  });

  it("should hande TOGGLE_DRAWER", () => {
    expect(dashboardReducer(initialState, toggleDrawer()).drawerOpen).toEqual(
      true
    );
  });
});
