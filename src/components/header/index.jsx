import React from 'react';
import { Link } from 'react-router-dom';
import { IoBookmarks } from "react-icons/io5";
const Header = () => {
  return (
    <header className="mb-10 flex justify-between items-center">
      <Link to={'/'}>
        <img
          src="/public/assets/netflix_logo.svg"
          alt="netflix"
          className="max-w-[150px]"
        />
      </Link>
      <Link to={"/watch-list"} className='flex gap-2 items-center hover:text-gray-300 transition'><IoBookmarks  />Watch List</Link>
    </header>
  );
};

export default Header;
