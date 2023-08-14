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
@Table(name = "hotels")
public class Hotels {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer htid;

    @Column(name = "hotel_name")
    private String hotelName;

    @Column(name = "hotel_country")
    private String hotelCountry;

    @Column(name = "hotel_city")
    private String hotelCity;

    @Column(name = "hotel_zipcode")
    private String hotelZipcode;

    @Column(name = "hotel_ammenities")
    private String hotelAmmenities;

     @Transient
     private List<Rooms> rooms;


    public Integer getHtid() {
        return htid;
    }

    public void setHtid(Integer htid) {
        this.htid = htid;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getHotelCountry() {
        return hotelCountry;
    }

    public void setHotelCountry(String hotelCountry) {
        this.hotelCountry = hotelCountry;
    }

    public String getHotelCity() {
        return hotelCity;
    }

    public void setHotelCity(String hotelCity) {
        this.hotelCity = hotelCity;
    }

    public String getHotelZipcode() {
        return hotelZipcode;
    }

    public void setHotelZipcode(String hotelZipcode) {
        this.hotelZipcode = hotelZipcode;
    }

    public String getHotelAmmenities() {
        return hotelAmmenities;
    }

    public void setHotelAmmenities(String hotelAmmenities) {
        this.hotelAmmenities = hotelAmmenities;
    }

    public List<Rooms> getRooms() {
        return rooms;
    }

    public void setRooms(List<Rooms> rooms) {
        this.rooms = rooms;
    }

    
}
