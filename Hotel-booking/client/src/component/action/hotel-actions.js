import flightsapi from "../api/flightsapi"
import { SAVE_BOOKING,  SEARCH_HOTELS } from "./actionTypes"




export const searchHotels= (info) => async (dispatch) => {
  try {
   const response = await flightsapi.get(`/find-hotels/${info.hotelName}/${info.checkinDate}/${info.checkoutDate}`)
   
   if(response && response.status === 200){
        dispatch({type:SEARCH_HOTELS, payload : response.data});
   }

  }catch (error) {
    console.log(error)
  }

}



export const saveBooking = (info) => async (dispatch) => {

  console.log(info);
  try {
   const response = await flightsapi.post("/save-booking", {...info})

   if(response && response.status === 200){
        dispatch({type:SAVE_BOOKING, payload : response.data});
   }

  }catch (error) {
    console.log(error)
  }

}