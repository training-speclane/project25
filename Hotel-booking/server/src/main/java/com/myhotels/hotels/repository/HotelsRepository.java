package com.myhotels.hotels.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.myhotels.hotels.entity.Hotels;



@Repository
public interface HotelsRepository extends JpaRepository<Hotels, Integer> {

    List<Hotels> findByHotelNameContaining(String hotelName);
    
}
