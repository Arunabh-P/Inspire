import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CartAmountToggle from './CartAmountToggle';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <div className="colors-div">
        <p className="color-txt">Colors :</p>
        <div className="color-btn-div">
          {colors.map((curColor, index) => (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              className={color === curColor ? 'color-btn active' : 'color-btn'}
              onClick={() => setColor(curColor)}
            >
              {color === curColor ? (
                <FaCheck className="check-icon" />
              ) : (
                <p style={{ color: curColor }}>.</p>
              )}
            </button>
          ))}
        </div>
      </div>
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />
      <Link to="/cart">
        <button className="add-cart-btn w-50">Add to cart</button>
      </Link>
    </>
  );
};

export default AddToCart;
