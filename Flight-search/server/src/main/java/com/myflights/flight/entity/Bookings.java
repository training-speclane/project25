package com.myflights.flight.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "bookings")
public class Bookings {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer bkid;


    
    @Column(name = "first_name")
    private String firstName;

     @Column(name = "last_name")
     private String lastName;

     
     @Column(name = "flid")
     private Integer flid;

     @Column(name = "origin")
     private String origin;

     
     @Column(name = "dest")
     private String dest;
     
     @Column(name = "travel_date")
     private String travelDate;

     @Column(name = "amount")
     private String amount;
    
    @Column(name = "seats")
    private String seats;

    @Column(name = "dob")
    private String dob;

    public Integer getBkid() {
        return bkid;
    }

    public void setBkid(Integer bkid) {
        this.bkid = bkid;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getFlid() {
        return flid;
    }

    public void setFlid(Integer flid) {
        this.flid = flid;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDest() {
        return dest;
    }

    public void setDest(String dest) {
        this.dest = dest;
    }

    public String getTravelDate() {
        return travelDate;
    }

    public void setTravelDate(String travelDate) {
        this.travelDate = travelDate;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getSeats() {
        return seats;
    }

    public void setSeats(String seats) {
        this.seats = seats;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }


    
}
