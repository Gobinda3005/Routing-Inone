// import React from 'react';
// import data from './data';
function Book (props)
{

const Book = ({ image, title, price })=props
  return (
    <div className="Book">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Book;