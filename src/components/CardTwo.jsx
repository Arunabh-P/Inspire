import React from 'react';
import { Link } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';
const CardTwo = (curElem) => {
  const { id, name, price, image, category } = curElem;

  return (
    <Link to={`/singleproduct/${id}`}>
      <div className="card-two-wrapper">
        <div
          className="card-two-img-div"
          style={{ backgroundImage: `url(${image})` }}
        >
          <p className="img-txt-cat">{category}</p>
        </div>
        <div className="card-two-content-div">
          <h5 className="card-two-headline">{name}</h5>

          <p className="card-two-price">{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardTwo;
