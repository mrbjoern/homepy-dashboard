import IStore from "./IStore";
import { combineReducers, Reducer } from "redux";
import { connectRouter } from "connected-react-router";
import HueReducer from "./hue/HueReducer";
import DashboardReducer from "./dashboard/DashboardReducer";

export default (history: any) =>
  combineReducers({
    hueReducer: HueReducer.reducer,
    dashboardReducer: DashboardReducer.reducer,
    router: connectRouter(history)
  }) as Reducer<IStore>;
