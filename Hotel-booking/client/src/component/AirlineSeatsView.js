import React, { useState } from 'react';
import { Button, Grid, Paper } from '@mui/material';
import { AirlineSeatIndividualSuite, AirlineSeatLegroomExtra } from '@mui/icons-material';

const AirlineSeatsView = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

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

  return (
    <div>
      <h2>Airline Seats View</h2>
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
  );
};

export default AirlineSeatsView;
