import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import Error from '../../components/error';
import Loader from '../../components/loader';

const Hero = () => {
  const [movie, setMovies] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    api
      .get('/movie/popular')
      .then((res) => {
        const movies = res.data.results;
        const random = Math.floor(Math.random() * movies.length);
        setMovies(movies[random]);
      })
      .catch((err) => setError(err.message));
  }, []);

  if(error) return <Error info={err.message}/>
  if(!movie) return <Loader/>

  console.log(movie);
  return <div>Hero</div>;
};

export default React.memo(Hero);
