import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';
const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white py-2">
      <h1 className="ml-4 cursor-pointer text-xl text-bold ">Wisata 3D</h1>
      <div className="ml-4 cursor-pointer text-xl text-bold flex items-center border-2 p-2 rounded-lg">
        <SearchIcon className="h-6 w-6 text-gray-400" />
        <input
          className="outline-none"
          type="text"
          placeholder="Cari model 3D"
        />
      </div>
      <ul className="flex items-center space-x-2 mr-2">
        <li className="text-blue-400 hover:cursor-pointer text-xl">Login</li>
        <li className="text-white bg-blue-400 p-2 rounded-lg hover:cursor-pointer">
          SIGN UP
        </li>
      </ul>
    </div>
  );
};

export default Header;
