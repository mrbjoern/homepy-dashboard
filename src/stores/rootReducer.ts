import IStore from "./IStore";
import { combineReducers, Reducer, ReducersMapObject } from "redux";
import HueReducer from "./hue/HueReducer";
import DashboardReducer from "./dashboard/DashboardReducer";

const reducerMap: ReducersMapObject = {
  hueReducer: HueReducer.reducer,
  dashboardReducer: DashboardReducer.reducer
  //quoteReducer: QuoteReducer.reducer,
};

export default combineReducers(reducerMap) as Reducer<IStore>;
