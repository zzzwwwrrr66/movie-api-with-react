import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import MovieItems from './MovieItems';
import Loading from '../../Loading';
import _ from 'lodash';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const getDatas = async (pageNum) => {
  return await axios.get(`https://yts.mx/api/v2/list_movies.json?page=${pageNum}`).then(data=>data);
}
function Movies(props) {
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState('1');
  const [movieCount, setMovieCount] = useState(0);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    const response = getDatas(currentPage);
    response.then(data=>data.data.data)
    .then(data=>{
      setMovieCount(data.movie_count);
      setCurrentPage(data.page_number);
      setMovieList(prevMovieList => {
        return [...prevMovieList, ...data.movies]
      });
      setLoading(false);
    })
    .catch(err=>console.log(err));
  }, []);

  return (
    <div className="">
      <Link to="/">
        <Button size="small">
          Go Home
        </Button>
      </Link>
      <h2>Movies</h2>
      <h3>Movie List</h3>
      <div>
      {
        loading ? <Loading />
        : <Grid container spacing={2} >
          {
            movieList.map((v,i)=>{
              return((
                <MovieItems key={Math.floor(Math.random()*i)+v.id+i} id={v.id} img={v.medium_cover_image} genres={v.genres} title={v.title} summary={v.summary} xsSize={4} isDetailBtn={true} />
              ))
            })
          }
        </Grid>
      }
      </div>
    </div>
  );
}

export default Movies;
