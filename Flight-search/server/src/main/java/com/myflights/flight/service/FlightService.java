package com.myflights.flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myflights.flight.entity.Flight;
import com.myflights.flight.repository.FlightRepository;

@Service
public class FlightService {

    @Autowired
private FlightRepository repo;



public void saveFlight(Flight flight){
    repo.saveAndFlush(flight);
}

 public List<Flight> findFlightsByDate(String origin, String dest, String date) {
    return repo.findByOriginAndDestAndDepartureDate(origin, dest, date);
 }

 
 public List<Flight> findFlightsBetween(String startDate, String endDate) {
    return repo.findByDepartureDateBetween(startDate, endDate);
 }

  public List<Flight> findFlights(String origin, String dest) {
    return repo.findByOriginAndDest(origin, dest);
 }
 
  public Flight findFlightById (int flid) {
     return repo.findByFlid(flid);
  }


}
