package com.myhotels.hotels.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myhotels.hotels.entity.Photos;
import com.myhotels.hotels.repository.PhotosRepository;

@Service
public class PhotosService {

    @Autowired
    private PhotosRepository repo;

    List<Photos> findPhotosForRoom(String roomId ){
        return repo.findByRoomNumber(roomId);
    }
    
}
