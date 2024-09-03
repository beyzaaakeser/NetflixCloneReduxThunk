import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { imageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';
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
          type: 'loop',
          infinite: true,
          autoplay: true,
          interval: 2500,
        }}
      >
        {movies?.map((movie, key) => (
          <SplideSlide key={key}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className="max-w-[300px] h-full cursor-pointer rounded transition hover:scale-[1.01]"
                src={imageURL + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
