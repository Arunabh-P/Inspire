import React from 'react';
import { Link } from 'react-router-dom';
import empty from '../images/empty-cart.png';
const CartEmpty = () => {
  return (
    <div className="empty-div">
      <img src={empty} className="empty-img" alt="" />
      <h4 className="empty-txt">No items in cart</h4>
      <Link to="/products">
        <button className="cntnue-btn  mt-2">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartEmpty;
