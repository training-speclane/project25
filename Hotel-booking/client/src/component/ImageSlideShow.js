import React, { useState } from 'react';
import { Button, Card, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';



const ImageSlideshow = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };


    return (
        <Card>
          <CardMedia
            component="img"
            alt={`Image ${currentIndex + 1}`}
            height="400"
            image={images[currentIndex]}
          />
          <Grid container justifyContent="space-between" alignItems="center" padding={2}>
            <Grid item>
              <IconButton onClick={handlePrev}>
                <ChevronLeft />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="body1">{`Image ${currentIndex + 1} of ${images.length}`}</Typography>
            </Grid>
            <Grid item>
              <IconButton onClick={handleNext}>
                <ChevronRight />
              </IconButton>
            </Grid>
          </Grid>
        </Card>
      );
    };
    
    export default ImageSlideshow;