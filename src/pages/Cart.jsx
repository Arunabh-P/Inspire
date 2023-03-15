import React from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cartContext';

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <Container>
      <div className="cart-pdt-div mt-5">
        {cart.map((curElem) => (
          <CartItem key={curElem.id} {...curElem} />
        ))}
      </div>
    </Container>
  );
};

export default Cart;
