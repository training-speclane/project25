import { SEARCH_FLIGHTS } from "../action/actionTypes";

export default (state = {} , action) => {

   switch(action.type){
    case SEARCH_FLIGHTS : 
        return {...state, searchResults:action.payload}
    default: 
    return state;
   }



}

