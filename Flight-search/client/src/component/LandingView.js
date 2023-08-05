import { Paper, Stack } from '@mui/material';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



export default function LandingView (props) {



    return (
        <div>
           <Stack direction="column" justifyContent="center">
           <Paper elevation={6}>  
             <div className='inner-search-form'>
             <FormControl>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="oneWay"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />
                    <FormControlLabel value="roundTrip" control={<Radio />} label="Round Trip" />
                </RadioGroup>
                </FormControl> 
             </div>
             </Paper> 

             <div>recomendations</div>

           </Stack>
        </div>
    )
}