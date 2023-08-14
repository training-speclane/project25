package com.myhotels.hotels.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.myhotels.hotels.entity.Photos;
import java.util.List;


@Repository
public interface PhotosRepository extends JpaRepository<Photos, Integer> {
    
    List<Photos> findByRoomNumber(String roomId);
}
