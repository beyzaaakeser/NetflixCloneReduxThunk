import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { imageURL } from '../../utils/constants';
const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };
    api
      .get('/discover/movie', { params })
      .then((res) => setMovies(res.data.results))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-semibold italic">{genre.name}</h1>

      <Splide
        options={{
          pagination: false,
          autoWidth: true,
          gap: '20px',
        }}
      >
        {movies?.map((movie, key) => (
          <SplideSlide key={key}>
            <img
              className="max-w-[300px] cursor-pointer rounded"
              src={imageURL + movie.poster_path}
              alt={movie.title}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
