import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function limitSummary(string) {
  let result = '';
  if(typeof string == 'string' && string.length > 100) {
    result = string.substring(0, 100) + '...';
  }

  return result;
}

function MovieItems({id, img, title, genres, summary, xsSize, isDetailBtn}) {

  useEffect(()=>{
    
  },[])
  

  return (
    <Grid item xs={xsSize}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height="500"
          image={img}
        />
        <CardContent>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Stack direction="row" spacing={0.5}>
              {
                genres
                && genres.map(genre=>{
                  return ((
                    <Chip label={genre} size="small" variant="outlined" />
                  ))
                })
              }
            </Stack>
            <Typography gutterBottom variant="body3" component="p">
              
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {limitSummary(summary)}
          </Typography>
        </CardContent>
        {
          isDetailBtn &&
          <CardActions>
            <Link to={`/detail/${id}`}>Learn More</Link>
          </CardActions>
        }
        
      </Card> 
    </Grid> 
  )
}

export default memo(MovieItems);