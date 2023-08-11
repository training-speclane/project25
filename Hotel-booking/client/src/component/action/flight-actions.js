import flightsapi from "../api/flightsapi"
import { SAVE_BOOKING, SEARCH_FLIGHTS } from "./actionTypes"




export const searchFlights = (info) => async (dispatch) => {
  try {
   const response = await flightsapi.get(`/find-flights/${info.origin}/${info.dest}/${info.date}`)

   if(response && response.status === 200){
        dispatch({type:SEARCH_FLIGHTS, payload : response.data});
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