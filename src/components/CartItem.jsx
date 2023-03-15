import React from 'react';

import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useCartContext } from '../context/cartContext';
import FormatPrice from '../helpers/FormatPrice';
import CartAmountToggle from './CartAmountToggle';

const CartItem = ({ id, name, amount, price, max, image, color }) => {
  const { removeItem } = useCartContext();
  const setDecrease = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <div className="cart-pdt-wrapper">
        <div className="cart-action-div-small">
          <MdOutlineDeleteOutline
            className="cart-delete-icn"
            onClick={() => removeItem(id)}
          />
        </div>
        <div className="cart-img-div">
          <img src={image} className="cart-img" alt="" />
        </div>
        <div className="cart-pdts-div">
          <h4 className="cart-pdt-headline">{name}</h4>
          <div className="d-flex">
            <p className="cart-pdt-txt"> Color : </p>
            <div
              className="cart-color"
              style={{ backgroundColor: `${color}` }}
            ></div>
          </div>
          <p className="cart-pdt-txt">
            <FormatPrice price={price} />
          </p>

          <div className="cart-pdt-quantity-div mb-3">
            <CartAmountToggle
              amount={amount}
              setDecrease={setDecrease}
              setIncrease={setIncrease}
            />
          </div>
          <p className="cart-pdt-txt">
            subtotal :
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div className="cart-action-div">
          <MdOutlineDeleteOutline
            className="cart-delete-icn"
            onClick={() => removeItem(id)}
          />
        </div>
      </div>
    </>
  );
};

export default CartItem;
