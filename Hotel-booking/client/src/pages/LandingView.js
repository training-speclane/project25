import { Button, Paper, Stack } from '@mui/material';
import React, { Fragment, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import {Container} from '@mui/material';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { searchFlights } from '../component/action/flight-actions';




export default function LandingView (props) {


    const [travelDate, setTravelDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const {searchResults} = useSelector(state => state.search)
    const navigate =  useNavigate();

    const [formData, setFormData] = useState({
        origin: "",
        dest : "",
        date : new Date(),
        returnDate : new Date(),
        numTravellers : ""
    })


    const handleInputChange = event => {
      const {name, value} = event.target;

      setFormData(prevData => ({
        ...prevData, [name]:value
      }));
    }

    const dispatch = useDispatch();
    const handleSearch = () => {

      const info =  {};
      info.origin = formData.origin;
      info.dest = formData.dest;
      info.date = formData.date;

        dispatch(searchFlights(info)).then(resp => {
          console.log("request complete");
        })
    }

    const handleBooking = (flightInfo) => {

        navigate(`/book-flight/${flightInfo.flid}`)
        //console.log("send the followinf flight info to server side", flightInfo);
    }


    const handleDataDisplay =  () => {

        if(!searchResults){
            return null
        }

        return (
            searchResults?.responseData.map((flight, index) => (
                <Fragment key={index}>
                    <Paper  elevation={3}>
                        <div style={{padding:'10px'}}>
                            <div>Time: {flight.departureTime}</div>
                            <div>Cost :  {flight.cost} </div>
                            <div>Aircraft : {flight.aircraft}</div>
                        </div>

                        <div><Button onClick={() => handleBooking(flight)} variant='outlined'>Book</Button></div>
                        <br/>
                    </Paper>
                  <br/>
               </Fragment>
            ))
        )
    }



    return (
        <div>
           <Stack direction="column" justifyContent="center">
           <Container maxWidth="lg">
            <form>
              <Paper elevation={6}>  

              <h3>Where are you looking to stay?</h3>
                <div className='inner-search-form'>
                <Stack direction="row" spacing={4}>
                       <TextField 
                            // onChange={(event) =>  handleFirstNameChange(event.target.value)}  
                            label="Where are you staying?" 
                            variant="outlined"
                            // helperText = {firstNameError}
                            name = "origin"
                            onChange={handleInputChange}
                        />
                        <TextField 
                                //onChange={(event) =>  setTravelDate(event.target.value)}  
                                label="Checkin Date" 
                                variant="outlined"
                                type ="date"
                                value = {formData.date}
                                name = "date"
                                onChange={handleInputChange}
                                // helperText = {firstNameError}
                            />

                            <TextField 
                                //onChange={(event) =>  setReturnDate(event.target.value)}  
                                label="Chechout Date" 
                                variant="outlined"
                                type = "date"
                                value = {formData.returnDate}
                                onChange={handleInputChange}
                                // helperText = {firstNameError}
                                name = "returnDate"
                            />
                            <TextField 
                                // onChange={(event) =>  handleFirstNameChange(event.target.value)}  
                                label="# Guests" 
                                variant="outlined"
                                onChange={handleInputChange}
                                // helperText = {firstNameError}
                                name = "numTravellers"
                            />

                          <div>
                           <Button onClick={() => handleSearch()} size='large' variant = "contained" color='success'> Search</Button>
                          </div> 
                        </Stack>
                   </div>  
                     <br/>

                </Paper> 
                </form>
              </Container>
             <div>
                <br/>
              <Container maxWidth="xl">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Paper elevation={6} style={{minHeight:'60vh'}}> 
                       xs=4
                      </Paper>
                    </Grid>
                
                    <Grid item xs={8}>
                    <Paper elevation={6} style={{minHeight:'60vh'}}> 
                       xs=8
                      </Paper>
                    </Grid>
                  </Grid>
                </Box>
             </Container>
             <Stack direction="column" justifyContent="center">
                <Container maxWidth="xl">
                    <Paper elevation={6}> 
                    <h3>Recommendations</h3>
                    <div style ={{pading:'10px'}}>

                    <Stack direction="row" justifyContent="center" spacing={3}>
                            <Box
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: 'solid 2px orange'
                                }}
                            />

                            <Box
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: 'solid 2px orange'
                                }}
                            />
                              <Box
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: 'solid 2px orange'
                                }}
                            />
                              <Box
                                sx={{
                                    width: 200,
                                    height: 200,
                                    border: 'solid 2px orange'
                                }}
                            />
                        </Stack>
                     
                     <br/>
                    </div>
                    </Paper>
                </Container>
              </Stack>

             </div>

           </Stack>
        </div>
    )
}