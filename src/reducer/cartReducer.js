const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let { id, color, amount, product } = action.payload;

      // tackle the existing product
      let existingProduct = state.cart.find(
        (curItem) => curItem.id === id + color
      );

      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }
    case 'SET_DECREMENT':
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;
          if (decAmount <= 1) {
            decAmount = 1;
          }
          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };

    case 'SET_INCREMENT':
      let updateIncProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incAmount = curElem.amount + 1;
          if (incAmount >= curElem.max) {
            incAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: incAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updateIncProduct,
      };

    case 'REMOVE_ITEM':
      let updatedCart = state.cart.filter(
        (curItem) => curItem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      };
    // case 'CART_TOTAL_ITEM':
    //   let updatedCartProductsQty = state.cart.reduce((initialVal, curElem) => {
    //     let { amount } = curElem;
    //     initialVal = initialVal + amount;
    //     return initialVal;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_item: updatedCartProductsQty,
    //   };

    //   case 'CART_TOTAL_PRICE':
    //   let total_price = state.cart.reduce((initialVal,curElem)=>{
    //     let {price,amount}=curElem;
    //     initialVal=initialVal+price*amount
    //     return initialVal
    //   },0)
    //   return {
    //     ...state,
    //     total_price
    //   };
    // simplifying above codes  2 in 1
    case 'CART_ITEM_PRICE_TOTAL':
      let { total_item, total_price } = state.cart.reduce(
        (accumulator, curElem) => {
          let { price, amount } = curElem;
          accumulator.total_item += amount; //accumulator.total_item = accumulator + amount;
          accumulator.total_price += price * amount; //accumulator.total_price=accumulator+price*amount
          return accumulator;
        },
        { total_item: 0, total_price: 0 }
      );
      return {
        ...state,
        total_item,
        total_price,
      };

    default:
      return state;
  }
};

export default cartReducer;
