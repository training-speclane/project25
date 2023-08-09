package com.myflights.flight.response;

import org.springframework.http.HttpStatus;

public  abstract class AbstractReponse {

    public  String message;
    public  String messageType;
    public  HttpStatus statusCode;
    
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getMessageType() {
        return messageType;
    }
    public void setMessageType(String messageType) {
        this.messageType = messageType;
    }
    public HttpStatus getStatusCode() {
        return statusCode;
    }
    public void setStatusCode(HttpStatus statusCode) {
        this.statusCode = statusCode;
    }


    
    
}
