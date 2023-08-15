package com.myhotels.hotels.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myhotels.hotels.entity.Photos;
import com.myhotels.hotels.entity.Rooms;
import com.myhotels.hotels.repository.PhotosRepository;
import com.myhotels.hotels.repository.RoomsRepository;

@Service
public class RoomsService {

    @Autowired
    private RoomsRepository repo;
    @Autowired
    private PhotosRepository photosRepo;


    public void saveRoom (Rooms room){
        repo.saveAndFlush(room);
    }


    public List<Rooms> findByAvailableDate(String checkinDate, String checkoutDate) {
      return repo.findByAvailableDateBetween(checkinDate, checkoutDate);
    }

    
    public List<Rooms> findByAC(String hasAc) {
      return repo.findByHasAc(hasAc);
    }
    
    public List<Rooms> findByMicroWave(String hasMicrowave) {
      return repo.findByHasMicrowave(hasMicrowave);
    }

    public Rooms findRoomById (String rmid){
        Rooms room =  repo.findByRmid(Integer.valueOf(rmid));
       
        if(room != null){
          List<Photos> availablePhotos = photosRepo.findByRoomNumber(String.valueOf(room.getRmid()));
          room.setPhotos(availablePhotos);
        }
        return room;
    }

  

}
