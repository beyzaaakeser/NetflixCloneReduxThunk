import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { imageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import RatingCircle from '../../components/rating';
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
            <div className="relative h-full">
              <Link to={`/movie/${movie.id}`}>
                <img
                  className="max-w-[300px] h-full cursor-pointer rounded transition hover:scale-[1.01]"
                  src={imageURL + movie.poster_path}
                  alt={movie.title}
                />
              </Link>
              {movie.vote_average > 0 && (
                <div className="absolute bottom-2 right-2">
                  <RatingCircle rating={movie.vote_average.toFixed(1)} />
                </div>
              )}
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
