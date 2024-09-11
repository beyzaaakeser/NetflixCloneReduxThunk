import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader';
import Error from '../../components/error';
import { imageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';

const Favourites = () => {
  const { isLoading, error, favorites } = useSelector(
    (store) => store.favorites
  );

  // if (isLoading) return <Loader />;
  if (error) return <Error info={error} />;
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Watch List</h1>

      <div className="grid grid-cols-2 gap-5 my-10 md:grid-cols3 lg:grid-cols-4 xl:grid-cols-5">
        {favorites.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <img src={imageURL + movie.poster_path} className="rounded" />
            <h1 className="text-xl text-center font-semibold mt-3">{movie.title}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
