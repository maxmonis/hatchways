import React from 'react';

const Error = ({ error }) => {
  return (
    <div className='error'>
      <h1>404: Something went wrong</h1>
      <p>{error}</p>
    </div>
  );
};

export default Error;
