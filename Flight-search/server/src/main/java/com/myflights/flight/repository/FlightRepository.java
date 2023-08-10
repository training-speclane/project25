package com.myflights.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myflights.flight.entity.Flight;
import java.util.List;

@Repository
public interface FlightRepository  extends JpaRepository<Flight, Integer> {


    List<Flight> findByOriginAndDestAndDepartureDate(String origin, String dest,  String departureDate);
    List<Flight> findByDepartureDateBetween(String startDate, String endDate);
    List<Flight> findByOriginAndDest(String origin, String dest);
    Flight findByFlid(Integer flid);

    
}
