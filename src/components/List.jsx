import React from 'react';
import { Link } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';

const List = (curElem) => {
  const { id, name, price, image, category, description, company } = curElem;

  return (
    <div className="list-wrapper">
      <div
        className="list-img-div"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="list-txt-cat">{category}</p>
      </div>
      <div className="list-content-div">
        <h5 className="list-headline">{name}</h5>
        <p className="list-txt">{company}</p>
        <p className="list-price">{<FormatPrice price={price} />}</p>
        <p className="list-txt">{description.slice(0, 180)}...</p>

        <Link to={`/singleproduct/${id}`}>
          {' '}
          <button className="view-btn">Read More</button>{' '}
        </Link>
      </div>
    </div>
  );
};

export default List;
