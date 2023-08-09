import { combineReducers } from "redux";
import flightReducer from "./flightReducer";


export default combineReducers({
    search : flightReducer
})