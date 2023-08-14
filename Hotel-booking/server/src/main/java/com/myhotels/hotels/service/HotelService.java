package com.myhotels.hotels.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myhotels.hotels.entity.Hotels;
import com.myhotels.hotels.entity.Photos;
import com.myhotels.hotels.entity.Rooms;
import com.myhotels.hotels.repository.HotelsRepository;
import com.myhotels.hotels.repository.PhotosRepository;
import com.myhotels.hotels.repository.RoomsRepository;

@Service
public class HotelService {

    @Autowired
    private HotelsRepository repo;

    @Autowired
    private RoomsRepository roomsRepo;

    @Autowired
    private PhotosRepository photosRepo;


    public void saveHotel(Hotels hotel){
        repo.saveAndFlush(hotel);
    } 

    public List<Hotels> findByHotelName (String theHotelName) {
        return repo.findByHotelNameContaining(theHotelName);
    }

    public List<Hotels> findByHotelNameAndRooms (String theHotelName, String checkinDate, String checkoutDate) {
       List<Hotels> hotels  =  repo.findByHotelNameContaining(theHotelName);
       if(!hotels.isEmpty()){
         for(Hotels hotel : hotels) {
           List<Rooms> availableRooms =  roomsRepo.findByAvailableDateBetween(checkinDate, checkoutDate);
            for(Rooms room : availableRooms){
               List<Photos> availablePhotos = photosRepo.findByRoomNumber(String.valueOf(room.getRmid()));
               room.setPhotos(availablePhotos);
            }
           hotel.setRooms(availableRooms);
          }
        }
       return hotels;
    }


    
  
    
}
