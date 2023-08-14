package com.myhotels.hotels.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myhotels.hotels.entity.Bookings;
import java.util.List;


@Repository
public interface BookingsRepository extends JpaRepository<Bookings, Integer> {

    List<Bookings> findByLastName(String lastName);
    List<Bookings> findByCheckinDate(String checkinDate);
    
}
