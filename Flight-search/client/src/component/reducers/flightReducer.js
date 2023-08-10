import { SAVE_BOOKING, SEARCH_FLIGHTS } from "../action/actionTypes";

export default (state = {} , action) => {

   switch(action.type){
    case SEARCH_FLIGHTS : 
        return {...state, searchResults:action.payload}
    case SAVE_BOOKING : 
        return {...state, savedBooking:action.payload}    
    default: 
    return state;
   }



}

