import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { MdOutlineChecklist } from 'react-icons/md';
const Button = () => {
  return (
    <div className="mb-5 flex justify-between">
      <Link
        to={'..'}
        className="bg-gray-600 py-2 px-4 rounded hover:bg-gray-500 transition flex justify-center items-center"
      >
        <RiArrowLeftSLine className="font-semibold text-xl" />
        Undo
      </Link>
      <button className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-500 transition  flex justify-center items-center gap-2">
        <MdOutlineChecklist className="font-semibold text-xl" /> Add To Watch
        List
      </button>
    </div>
  );
};

export default Button;
