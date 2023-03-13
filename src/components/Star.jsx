import React from 'react';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="star-icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="star-icon" />
        ) : (
          <AiOutlineStar className="star-icon" />
        )}
      </span>
    );
  });
  return (
    <>
      <div className="star-div">
        {ratingStar}
        <p className="star-txt">{reviews} Customer reviews</p>
      </div>
    </>
  );
};

export default Star;
