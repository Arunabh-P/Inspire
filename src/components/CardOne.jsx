import React from 'react';
import { Link } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';

const CardOne = (curElem) => {
  const { id, name, price, image } = curElem;
  return (
    <Link to={`/singleproduct/${id}`}>
      <div className="card-wrapper">
        <div
          className="card-img-div"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-content-div">
          <h5 className="card-headline">{name}</h5>
          {/* <p className="card-price">₹ {price}</p> */}
          <p className="card-price">{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardOne;
