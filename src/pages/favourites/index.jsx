import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader';
import Error from '../../components/error';
import { imageURL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import { MdBookmarkRemove } from 'react-icons/md';
import { toggleFavourite } from '../../redux/actions';

const Favourites = () => {
  const dispatch = useDispatch();
  const { isLoading, error, favorites } = useSelector(
    (store) => store.favorites
  );

  const handleDelete = (movie) => {
    dispatch(toggleFavourite(movie, false));
  };

  // if (isLoading) return <Loader />;
  if (error) return <Error info={error} />;
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-semibold">Watch List</h1>

      <div className="grid grid-cols-2 gap-5 my-10 md:grid-cols3 lg:grid-cols-4 xl:grid-cols-5">
        {favorites.map((movie,index) => (
          <div key={index} className="relative z-0">
            <button
              onClick={() => handleDelete(movie)}
              className="absolute end-3 top-2 bg-blue-500 py-2 px-4 rounded-full hover:bg-blue-600 transition z-10 "
            >
              <MdBookmarkRemove />
            </button>
            <Link to={`/movie/${movie.id}`}>
              <img src={imageURL + movie.poster_path} className="rounded" />
            </Link>
            <h1 className="text-xl text-center font-semibold mt-3">
              {movie.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
