import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem('inspireCart');
  // if (!localCartData) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parseData = JSON.parse(localCartData);
  if (!Array.isArray(parseData)) return [];
  return parseData;
};
const initialState = {
  cart: getLocalCartData(),
  total_item: '',
  total_amount: '',
  shipping_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };
  // increment and decrement product
  const setDecrement = (id) => {
    dispatch({ type: 'SET_DECREMENT', payload: id });
  };
  const setIncrement = (id) => {
    dispatch({ type: 'SET_INCREMENT', payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  useEffect(() => {
    // dispatch({ type: 'CART_TOTAL_ITEM' });
    // dispatch({ type: 'CART_TOTAL_PRICE' });

    // simplifiying code above
    dispatch({ type: 'CART_ITEM_PRICE_TOTAL' });

    //  add data to localStorage
    localStorage.setItem('inspireCart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrement,
        setIncrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
