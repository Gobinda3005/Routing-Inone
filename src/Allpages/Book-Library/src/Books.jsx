import React from 'react';
import Book from './Book';
import Data from './data';

import './index.css';
// import data from './data';

const data = ({ genre, books }) => {
  return (
    <div>
      <h2>{genre}</h2>
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </div>
  );
};

export default Data;