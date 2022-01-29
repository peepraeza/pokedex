import {combineReducers} from "redux";
import CurrentUrlPathReducer from "./CurrentUrlPathReducer";

const RootReducer = combineReducers({
  CurrentUrlPath: CurrentUrlPathReducer,
});

export default RootReducer;
