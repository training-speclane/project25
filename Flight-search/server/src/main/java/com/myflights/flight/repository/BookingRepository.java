package com.myflights.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myflights.flight.entity.Bookings;

@Repository
public interface  BookingRepository extends JpaRepository<Bookings, Integer> {
    
}
