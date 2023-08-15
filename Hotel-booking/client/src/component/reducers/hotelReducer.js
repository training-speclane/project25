import { SAVE_BOOKING, SEARCH_HOTELS, ROOM_INFO } from "../action/actionTypes";

export default (state = {} , action) => {

   switch(action.type){
    case SEARCH_HOTELS : 
        return {...state, searchResults:action.payload}
    case SAVE_BOOKING : 
        return {...state, savedBooking:action.payload}   
    case ROOM_INFO :
        return {...state , selectedRoom:action.payload} 
    default: 
    return state;
   }



}

