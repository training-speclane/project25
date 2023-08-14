package com.myhotels.hotels.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "photos")
public class Photos {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer htpid;

    @Column(name = "image_url")
    private String imageURL;

    @Column(name = "date_added")
    private String dateAddedd;

    @Column(name = "room_number")
    private String roomNumber;

    public Integer getHtpid() {
        return htpid;
    }

    public void setHtpid(Integer htpid) {
        this.htpid = htpid;
    }

    public String getImageURL() {
        return imageURL;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public String getDateAddedd() {
        return dateAddedd;
    }

    public void setDateAddedd(String dateAddedd) {
        this.dateAddedd = dateAddedd;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }



    
    


    
}
