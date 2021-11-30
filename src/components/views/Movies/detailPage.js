import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import MovieItems from './MovieItems';
import Button from '@mui/material/Button';
import Loading from '../../Loading';


function Detail(props) {
  const pramsObj = useParams();
  const [movieId, setMovieId] = useState(useParams().id || null);
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    console.log(movieId);
    if(!props.match.params.id) return;
    axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${props.match.params.id}`)
    .then(res=>res.data)
    .then(data=> {
      setDetail(prevDetail=>{
        return {...prevDetail, ...data.data.movie}
      });
      setLoading(false);
    })
    .catch(err=> console.log(err));
  }, [])

  return (
    <>
    <h2>Detail!</h2>
    <Link to="/movies">
        <Button size="small">
        Move Movie List Page
        </Button>
      </Link>
    <br />
    <br />
    {
      loading ?
      <Loading />
      :<MovieItems id={detail.id} img={detail.medium_cover_image} genres={detail.genres} title={detail.title} summary={detail.description_intro} xsSize={6} isDetailBtn={false} />
    }
    </>
  )
  
}

export default Detail;