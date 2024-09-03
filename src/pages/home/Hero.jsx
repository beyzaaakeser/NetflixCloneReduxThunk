import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import Error from '../../components/error';
import Loader from '../../components/loader';
import { imageURL } from '../../utils/constants';

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

  if (error) return <Error info={err.message} />;
  if (!movie) return <Loader />;

  console.log(movie);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-h-[400px] gap-5 mb-10  ">
      <div className="flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p className="text-start text-gray-300">{movie.overview}</p>
        <p>
          <span>IMDB</span>
          <span className="text-yellow-400 ms-2 font-semibold">
            {movie.vote_average.toFixed(1)}
          </span>
        </p>

        <div className="flex gap-5">
          <button className="p-2 bg-red-600 rounded transition hover:bg-red-700">
            Watch Online
          </button>
          <button className="p-2 bg-blue-600 rounded transition hover:bg-blue-700">Add To List</button>
        </div>
      </div>

      <div>
        <img className='drop-shadow-[0_0_80px_rgba(255,255,255,0.4)] my-4 object-contain rounded max-h-[300px]' src={imageURL + movie.backdrop_path} alt="" />
      </div>
    </div>
  );
};

export default React.memo(Hero);
