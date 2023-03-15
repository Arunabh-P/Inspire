import React from 'react';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cartContext';

import { IoIosRemoveCircle } from 'react-icons/io';

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Clear Cart
    </Tooltip>
  );
  if (cart.length === 0) {
    return (
      <Container>
        <h3>No Cart in Item </h3>
      </Container>
    );
  }

  return (
    <Container>
      <div className="cart-wrapper-section mt-3">
        <div className="cart-pdt-div ">
          <div className="cart-btns-div">
            <h3 className="cart-pdt-txt">Cart Products</h3>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <button className="clear-btn">
                <IoIosRemoveCircle className="clear-icon" onClick={clearCart} />
              </button>
            </OverlayTrigger>
          </div>
          {cart.map((curElem) => (
            <CartItem key={curElem.id} {...curElem} />
          ))}
        </div>
        <div className="cart-det-div">
          <div className="price-details-div">
            <p className="cart-pdt-txt">
              Subtotal :<span className="cart-txt-span">500</span>
            </p>
            <p className="cart-pdt-txt">
              Shipping fee :<span className="cart-txt-span">500</span>
            </p>
            <p className="cart-pdt-txt">
              Grand Total :<span className="cart-txt-span">500</span>
            </p>
            <Link to="#">
              <button className="proceed-btn w-100">Proceed</button>
            </Link>
            <Link to="/products">
              <button className="cntnue-btn w-100 mt-2">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
