import React from 'react';
import Hero from './Hero';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader';
import Error from '../../components/error';

const Home = () => {
  const { isLoading, error, genres } = useSelector((store) => store.genres);
  console.log(genres);
  return (
    <div>
      <Hero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} />
      ) : (
        genres.map((genre) => <div key={genre.id}>{genre.name}</div>)
      )}
    </div>
  );
};

export default Home;
