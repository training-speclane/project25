import hotelsapi from "../api/hotelsapi"
import { ROOM_INFO, SAVE_BOOKING,  SEARCH_HOTELS } from "./actionTypes"




export const searchHotels= (info) => async (dispatch) => {
  try {
   const response = await hotelsapi.get(`/find-hotels/${info.hotelName}/${info.checkinDate}/${info.checkoutDate}`)
   
   if(response && response.status === 200){
        dispatch({type:SEARCH_HOTELS, payload : response.data});
   }

  }catch (error) {
    console.log(error)
  }

}



export const findRoomById = (rmid) => async (dispatch) => {
  try {
   const response = await hotelsapi.get(`/find-room/${rmid}`)
   
   if(response && response.status === 200){
        dispatch({type:ROOM_INFO, payload : response.data});
   }

  }catch (error) {
    console.log(error)
  }

}




export const saveBooking = (info) => async (dispatch) => {

  console.log(info);
  try {
   const response = await hotelsapi.post("/save-booking", {...info})

   if(response && response.status === 200){
        dispatch({type:SAVE_BOOKING, payload : response.data});
   }

  }catch (error) {
    console.log(error)
  }

}