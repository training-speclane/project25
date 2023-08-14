package com.myhotels.hotels.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myhotels.hotels.entity.Rooms;
import com.myhotels.hotels.repository.RoomsRepository;

@Service
public class RoomsService {

    @Autowired
    private RoomsRepository repo;


    public void saveRoom (Rooms room){
        repo.saveAndFlush(room);
    }


    List<Rooms> findByAvailableDate(String checkinDate, String checkoutDate) {
      return repo.findByAvailableDateBetween(checkinDate, checkoutDate);
    }

    
    List<Rooms> findByAC(String hasAc) {
      return repo.findByHasAc(hasAc);
    }
    
    List<Rooms> findByMicroWave(String hasMicrowave) {
      return repo.findByHasMicrowave(hasMicrowave);
    }

}
