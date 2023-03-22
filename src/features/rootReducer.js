import { combineReducers } from "redux";
import { filterReducer } from "./filter/filterSlice";
import { positionReducer } from "./positions/PositionsSlice";

export const reducer = combineReducers({
    positions: positionReducer,
    filters: filterReducer
})