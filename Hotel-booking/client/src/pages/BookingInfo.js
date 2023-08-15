import React, {useEffect, useState} from 'react';
import { Backdrop, Button, Grid, Paper, Stack } from '@mui/material';
import { AirlineSeatIndividualSuite, AirlineSeatLegroomExtra, RocketOutlined } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveBooking, findRoomById } from '../component/action/hotel-actions';


export default function BookingInfo () {

    const dispatch = useDispatch()
    const {rmid} = useParams();


    const [loading, setLoading] = useState(false);
    const {savedBooking, selectedRoom} = useSelector(state => state.search);
    

    useEffect(() => {
      if(rmid) {
         dispatch(findRoomById(rmid));
      }

    }, [])




    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName : "",
        dob : new Date()
    })






    const handleInputChange = event => {
      const {name, value} = event.target;

      setFormData(prevData => ({
        ...prevData, [name]:value
      }));
    }



    

    const handleBookingContinue =  () => {

        setLoading(true);
        console.log(formData, rmid);

        let formValues =  {};
        formValues.firstName =  formData.firstName;
        formValues.lastName =  formData.lastName;
        formValues.dob = formData.dob;
        formValues.rmid =  rmid;


        dispatch(saveBooking(formValues)).then(() => {
             setLoading(false);
        });

    }


    const renderRoomInfo = () => {

      console.log("room info is ", selectedRoom);

      let room;

      if(selectedRoom){
        room =  selectedRoom.responseData;

      }

      if(!room){
        return null;
      }

      return(
        <React.Fragment>
            <h3>{room.roomName}</h3>

            <Card>
              <CardMedia
                    component="img"
                    alt={"images"}
                    height="100"
                    image={room.photos[1].imageURL}
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

              </CardActions>
            </Card>
           
        </React.Fragment>
      )
    }
  


    const renderPersonalInfo =  () => {

        return(
            <Paper elevation={6}>  
            <h3>Enter Personal Information</h3>
              <div className='inner-search-form'>
                
              <Stack direction="column">
               <div>  
                  <TextField 
                          // onChange={(event) =>  handleFirstNameChange(event.target.value)}  
                          label="First name" 
                          variant="outlined"
                          // helperText = {firstNameError}
                          name = "firstName"
                          onChange={handleInputChange}
                      />
                      &nbsp;
                   <TextField 
                          // onChange={(event) =>  handleFirstNameChange(event.target.value)}  
                          label="Last name" 
                          variant="outlined"
                          // helperText = {firstNameError}
                          name = "lastName"
                          onChange={handleInputChange}
                      />
                  </div>
                  <br/>
                  <div>
                      <TextField 
                              //onChange={(event) =>  setTravelDate(event.target.value)}  
                              label="Date of birth" 
                              variant="outlined"
                              type ="date"
                              value = {formData.dob}
                              name = "dob"
                              onChange={handleInputChange}
                              // helperText = {firstNameError}
                          />
                        
                     </div> 
                   </Stack> 
                 </div>
              </Paper> 
        )
    }


    const renderMessage  = () => {

        if(!savedBooking){
            return null;
        }

        return (
            <Alert severity={savedBooking?.messageType.toLowerCase()}>
            <AlertTitle>{savedBooking?.messageType}</AlertTitle>
               <strong>{savedBooking?.message}!</strong>
            </Alert>
        )
    }



    return(
            <React.Fragment>
             
            {renderMessage()}

             <h3>Enter your info to continue Booking</h3>

            
             {renderRoomInfo()}

             {renderPersonalInfo()}
             
             <br/>
             <Button onClick={() =>  handleBookingContinue()} variant='contained' >Book this room</Button>

             <Backdrop open = {loading} />
            </React.Fragment>
    )
}