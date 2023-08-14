package com.myhotels.hotels.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.myhotels.hotels.entity.Bookings;
import com.myhotels.hotels.repository.BookingsRepository;

@Service
public class BookingService {


    private BookingsRepository repo;



    public void saveBooking (Bookings booking) {
          repo.saveAndFlush(booking);
    }

    public List<Bookings> findByLastName(String lastName){
        return repo.findByLastName(lastName);
    }

    List<Bookings> findByCheckinDate(String checkinDate){
        return repo.findByCheckinDate(checkinDate);
    }

    
    
}
