import React from 'react';
import { MdOutlineChecklist, MdBookmarkRemove } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavourite } from '../../redux/actions';
const Button = ({ movie }) => {
  const { favorites } = useSelector((store) => store.favorites);
  const dispatch = useDispatch();
  const isFav = favorites.find((item) => item.id === movie.id);
  const hanleClick = () => {
    dispatch(toggleFavourite(movie, !isFav));
  };

 
  return (

      <button
        onClick={hanleClick}
        className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition  flex justify-center items-center gap-2"
      >
        {isFav ? (
          <>
            {' '}
            <MdBookmarkRemove className="font-semibold text-xl" /> Remove From
            Watchlist
          </>
        ) : (
          <>
            <MdOutlineChecklist className="font-semibold text-xl" /> Add To
            Watch List
          </>
        )}
      </button>

  );
};

export default Button;
