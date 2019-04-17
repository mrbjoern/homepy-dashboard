import IStore from "./IStore";
import { combineReducers, Reducer } from "redux";
import { connectRouter } from "connected-react-router";
import { hueReducer } from "./hue/HueReducer";
import { dashboardReducer } from "./dashboard/DashboardReducer";

export default (history: any) =>
  combineReducers({
    hueReducer: hueReducer,
    dashboardReducer: dashboardReducer,
    router: connectRouter(history)
  }) as Reducer<IStore>;
