import React from 'react';
import { useSelector } from 'react-redux';

const Favourites = () => {
 const {isLoading,error,favorites} = useSelector((store)=> store.favorites)
 console.log(isLoading);
 console.log(error);
 console.log(favorites);
  return <div>
    <h1 className='text-xl md:text-2xl font-semibold'>Watch List</h1>
  </div>;
};

export default Favourites;
