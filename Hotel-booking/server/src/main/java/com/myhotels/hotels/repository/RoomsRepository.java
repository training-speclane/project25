package com.myhotels.hotels.repository;

import com.myhotels.hotels.entity.Rooms;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;




@Repository
public interface RoomsRepository extends JpaRepository<Rooms, Integer> {

  List<Rooms> findByAvailableDateBetween(String checkinDate, String checkoutDate);
  List<Rooms> findByHasAc(String hasAc);
  List<Rooms> findByHasMicrowave(String hasMicrowave);
    
}
