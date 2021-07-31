import { combineReducers } from "redux";
import robotReducer from "./robots/robots.reducer";

const rootReducer = combineReducers({
    robot: robotReducer
})

export default rootReducer;