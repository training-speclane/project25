import { combineReducers } from "redux";
import hotelReducer from "./hotelReducer";


export default combineReducers({
    search : hotelReducer
})