package com.myflights.flight.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myflights.flight.entity.Airport;



@Repository
public interface  AirportRepository  extends JpaRepository<Airport, Integer> {

    Airport findByAirportCode(String airportCode);
    Airport findByLongName(String longName);

    
}
