import React, {useState} from 'react';
import { Backdrop, Button, Grid, Paper, Stack } from '@mui/material';
import { AirlineSeatIndividualSuite, AirlineSeatLegroomExtra } from '@mui/icons-material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveBooking } from '../component/action/flight-actions';


export default function BookingInfo () {

    const dispatch = useDispatch()
    const {flid} = useParams();

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [loading, setLoading] = useState(false);
    const {savedBooking} = useSelector(state => state.search);
    
    
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



    const handleSeatClick = (seat) => {
      if (selectedSeats.includes(seat)) {
        setSelectedSeats(selectedSeats.filter(s => s !== seat));
      } else {
        setSelectedSeats([...selectedSeats, seat]);
      }
    };

    const handleBookingContinue =  () => {

        setLoading(true);
        console.log(selectedSeats, formData, flid);


    // String firstName;
    // String lastName;
    // Integer flid;
    // String origin;
    // String dest;
    // String travelDate;
    // String amount;
    // String seats;
    // String dob

        let formValues =  {};
        formValues.firstName =  formData.firstName;
        formValues.lastName =  formData.lastName;
        formValues.dob = formData.dob;
        formValues.seats =  selectedSeats.join(',');
        formValues.flid =  flid;


        dispatch(saveBooking(formValues)).then(() => {
             setLoading(false);
        });

    }
  
    const renderSeat = (seatNumber) => {
      const isSelected = selectedSeats.includes(seatNumber);
  
      return (
        <Button
          variant={isSelected ? 'contained' : 'outlined'}
          startIcon={isSelected ? <AirlineSeatIndividualSuite /> : <AirlineSeatLegroomExtra />}
          onClick={() => handleSeatClick(seatNumber)}
        >
          {seatNumber}
        </Button>
      );
    };
  

    const renderAirlineSeatsView =  () => {

        return(
            <div>
                <Grid container spacing={2}>
                {Array.from({ length: 6 }, (_, row) => (
                    <Grid container item justifyContent="center" key={row}>
                    {Array.from({ length: 5 }, (_, col) => (
                        <Grid item key={col}>
                        <Paper elevation={3} sx={{ p: 2 }}>
                            {renderSeat(`${String.fromCharCode(65 + row)}${col + 1}`)}
                        </Paper>
                        </Grid>
                    ))}
                    </Grid>
                ))}
                </Grid>
          </div>
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

            {renderAirlineSeatsView()}

             {renderPersonalInfo()}
             
             <br/>
             <Button onClick={() =>  handleBookingContinue()} variant='contained' >Book this flight</Button>

             <Backdrop open = {loading} />
            </React.Fragment>
    )
}