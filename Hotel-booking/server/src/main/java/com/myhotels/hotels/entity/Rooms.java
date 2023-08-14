package com.myhotels.hotels.entity;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;

@Entity
@Table(name = "rooms")
public class Rooms {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rmid;


    @Column(name = "room_name")
    private String roomName;

    @Column(name = "price_per_night")
    private String pricePerNight;
   
    @Column(name = "num_beds")
    private String numBeds;

    @Column(name = "refrigerator")
    private String hasRefrigerator;

    @Column(name = "microwave")
    private String hasMicrowave;

    @Column(name = "bed_types")
    private String bedTypes;

     @Column(name = "ac")
    private String hasAc;


    @Column(name = "available_date")
    private String availableDate;
   
    @Column(name = "room_available")
    private String roomAvailable;

    @Column(name = "hotel_id")
    private String hotelId;

    @Transient
    private List<Photos> photos;


    public Integer getRmid() {
        return rmid;
    }

    public void setRmid(Integer rmid) {
        this.rmid = rmid;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getPricePerNight() {
        return pricePerNight;
    }

    public void setPricePerNight(String pricePerNight) {
        this.pricePerNight = pricePerNight;
    }

    public String getNumBeds() {
        return numBeds;
    }

    public void setNumBeds(String numBeds) {
        this.numBeds = numBeds;
    }

    public String getHasRefrigerator() {
        return hasRefrigerator;
    }

    public void setHasRefrigerator(String hasRefrigerator) {
        this.hasRefrigerator = hasRefrigerator;
    }

    public String getHasMicrowave() {
        return hasMicrowave;
    }

    public void setHasMicrowave(String hasMicrowave) {
        this.hasMicrowave = hasMicrowave;
    }

    public String getBedTypes() {
        return bedTypes;
    }

    public void setBedTypes(String bedTypes) {
        this.bedTypes = bedTypes;
    }

    public String getHasAc() {
        return hasAc;
    }

    public void setHasAc(String hasAc) {
        this.hasAc = hasAc;
    }

    public String getAvailableDate() {
        return availableDate;
    }

    public void setAvailableDate(String availableDate) {
        this.availableDate = availableDate;
    }

    public String getRoomAvailable() {
        return roomAvailable;
    }

    public void setRoomAvailable(String roomAvailable) {
        this.roomAvailable = roomAvailable;
    }

    public String getHotelId() {
        return hotelId;
    }

    public void setHotelId(String hotelId) {
        this.hotelId = hotelId;
    }

    public List<Photos> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photos> photos) {
        this.photos = photos;
    }

    
    
    


}
