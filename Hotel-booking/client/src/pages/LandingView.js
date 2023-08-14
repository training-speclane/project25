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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import {  searchHotels } from '../component/action/hotel-actions';




export default function LandingView (props) {

    const {searchResults} = useSelector(state => state.search)
    const navigate =  useNavigate();

    const [formData, setFormData] = useState({
        hotelName: "",
        checkinDate : new Date(),
        checkoutDate : new Date(),
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
      info.hotelName = formData.hotelName;
      info.checkinDate = formData.checkinDate;
      info.checkoutDate = formData.checkoutDate;

        dispatch(searchHotels(info)).then(resp => {
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
            searchResults?.responseData.map((hotel, index) => (
                <Fragment key={index}>
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
                                <h2>{hotel.hotelName}</h2>
                                  <strong>Ammentities</strong> : {hotel.hotelAmmenities}
                                   <br/><br/>
                                  <Stack direction="row" spacing={3}>
                                      {
                                        hotel.rooms.map((room, index) => (
                                          
                                              <React.Fragment>
                                                  <Card sx={{ maxWidth: 345 }}>
                                                      <CardMedia
                                                            component="img"
                                                            alt={"images"}
                                                            height="100"
                                                            image={room.photos[0].imageURL}
                                                        />    
                                                      <CardContent>
                                                        <Typography gutterBottom variant="h5" component="div">
                                                        {room.roomName}
                                                        </Typography>
                                                        <div style={{textAlign:'left'}}>
                                                          <div><strong>Bed type : </strong>{room.bedType}</div>  
                                                          <div><strong>Has Airconditioning  : </strong>{room.hasAc === 'Y' ? 'YES': 'NO'}</div> 
                                                          <div><strong>Has Microwave : </strong>{room.hasMicrowave === 'Y' ? 'YES': 'NO'}</div> 
                                                          <div><strong>Has hasRefrigerator : </strong>{room.hasRefrigerator === 'Y' ? 'YES': 'NO'}</div> 
                                                          <div><strong>Number of Beds : </strong>{room.numBeds}</div>                 
                                                        </div>
                                                      </CardContent>
                                                      <CardActions>
                                                        <Button size="small">Share</Button>
                                                        <Button variant="contained" color="success">Book now</Button>
                                                      </CardActions>
                                                    </Card>
                                              </React.Fragment>
                                          )
                                        )
                                      }
                                  </Stack>
                            </Paper>
                          </Grid>
                        </Grid>
                    </Box>
                </Container>  
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
                            name = "hotelName"
                            value =  {formData.hotelName}
                            onChange={handleInputChange}
                        />
                        <TextField 
                                //onChange={(event) =>  setTravelDate(event.target.value)}  
                                label="Checkin Date" 
                                variant="outlined"
                                type ="date"
                                value = {formData.checkinDate}
                                name = "checkinDate"
                                onChange={handleInputChange}
                                // helperText = {firstNameError}
                            />

                            <TextField 
                                //onChange={(event) =>  setReturnDate(event.target.value)}  
                                label="Checkout Date" 
                                variant="outlined"
                                type = "date"
                                value = {formData.checkoutDate}
                                onChange={handleInputChange}
                                // helperText = {firstNameError}
                                name = "checkoutDate"
                            />
                            <TextField 
                                // onChange={(event) =>  handleFirstNameChange(event.target.value)}  
                                label="# Guests" 
                                variant="outlined"
                                onChange={handleInputChange}
                                value = {formData.numTravellers}
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
               {handleDataDisplay()}
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