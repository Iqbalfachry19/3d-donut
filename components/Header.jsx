import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="ml-2">Wisata 3D</h1>
      <ul className="flex space-x-2 mr-2">
        <li>Kembali ke Awal</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Header;
