package com.myhotels.hotel.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myflights.flight.entity.Bookings;
import com.myflights.flight.repository.BookingRepository;

@Service
public class BookingsService {

    @Autowired
    private BookingRepository repo;


    public void saveBooking(Bookings booking){
        repo.saveAndFlush(booking);
    }
    
}
