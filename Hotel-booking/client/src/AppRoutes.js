
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingView from './pages/LandingView';
import FlightInfo from './pages/FlightInfo';
import BookingInfo from './pages/BookingInfo';



export default function AppRoutes(props) {




    return(
     <BrowserRouter>
         <Routes> 
            <Route path='/' element = {<LandingView/>} />
            <Route path='/view-hotel-info' element = {<FlightInfo/>} />
            <Route path='/book-hotel/:rmid' element = {<BookingInfo/>} />
         </Routes>
     </BrowserRouter>

    )
}


