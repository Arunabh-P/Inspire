import React from 'react';

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-qty-div">
      <button className="plus-minus-btn" onClick={() => setDecrease()}>
        <AiOutlineMinus className="plus-minus-icon" />
      </button>
      <p className="cart-qty-txt">{amount}</p>
      <button className="plus-minus-btn" onClick={() => setIncrease()}>
        <AiOutlinePlus className="plus-minus-icon" />
      </button>
    </div>
  );
};

export default CartAmountToggle;
