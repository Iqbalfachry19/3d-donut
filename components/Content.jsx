import React from 'react';

const Content = ({ name, description }) => {
  return (
    <div>
      <h1 className="ml-2 text-xl">{name}</h1>
      <p className="ml-2">{description}</p>
    </div>
  );
};

export default Content;
