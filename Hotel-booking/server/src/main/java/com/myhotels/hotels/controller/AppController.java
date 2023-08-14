package com.myhotels.hotels.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.myhotels.hotels.entity.Bookings;
import com.myhotels.hotels.entity.Hotels;
import com.myhotels.hotels.response.ObjectResponse;
import com.myhotels.hotels.service.BookingService;
import com.myhotels.hotels.service.HotelService;
import com.myhotels.hotels.service.PhotosService;
import com.myhotels.hotels.service.RoomsService;



@RestController
public class AppController {

    @Autowired
    private BookingService bookingService;
    
    @Autowired
    private PhotosService photosService;

    @Autowired 
    private RoomsService roomsService;

    @Autowired
    private HotelService hotelService;




    @GetMapping("/find-hotels/{hotelName}/{checkinDate}/{checkoutDate}") 
      public ResponseEntity<ObjectResponse>findHotels(@PathVariable() String hotelName, @PathVariable() String checkinDate, @PathVariable() String checkoutDate  ) {
    ObjectResponse resp =  new ObjectResponse();
     try {
      
        List<Hotels> hotels =  hotelService.findByHotelNameAndRooms(hotelName, checkinDate, checkoutDate);
        resp.setResponseData(hotels);
        resp.setStatusCode(HttpStatus.OK);
        resp.setMessageType("SUCCESS");
        //return flights;
     } catch (Exception ex){
         resp.setStatusCode(HttpStatus.BAD_REQUEST);
         resp.setMessage("Error occured on the server");
         resp.setMessageType("ERROR");
         ex.printStackTrace();
     }
     return new ResponseEntity<ObjectResponse>(resp, resp.getStatusCode());
    }


   //@PostMapping("/save-booking") 
     // public ResponseEntity<ObjectResponse>findFlights( @RequestBody Bookings booking ) {
        //public ResponseEntity<ObjectResponse>findFlights(@RequestParam() String origin, @RequestParam() String dest, @RequestParam() String date  ) {

        // ObjectResponse resp =  new ObjectResponse();
        //  try {

        //     //1. Perform vbalidations if needed
          
        //    //2. save the booking to the DB
            
        //    Flight flight =  flightService.findFlightById(booking.getFlid());

        //    if(flight != null){

        //       booking.setAmount(flight.getCost());
        //       booking.setDest(flight.getDest());
        //       booking.setOrigin(flight.getOrigin());
        //       booking.setTravelDate(flight.getDepartureDate());
            
        //       bookingsService.saveBooking(booking);
        //       resp.setStatusCode(HttpStatus.OK);
        //       resp.setMessageType("SUCCESS");
        //       resp.setMessage("Booking has been made and you are good to fly!");
        //    }else{
        //      resp.setStatusCode(HttpStatus.BAD_REQUEST);
        //      resp.setMessage("Flight does not exist");
        //      resp.setMessageType("ERROR");
        //    }
        //     //return flights;
        //  } catch (Exception ex){
        //      resp.setStatusCode(HttpStatus.BAD_REQUEST);
        //      resp.setMessage("Error occured on the server");
        //      resp.setMessageType("ERROR");
        //      ex.printStackTrace();
        //  }
        //  return new ResponseEntity<ObjectResponse>(resp, resp.getStatusCode());
        // 
     // }


    
}
