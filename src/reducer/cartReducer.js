const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let { id, color, amount, product } = action.payload;
      console.log(
        '🚀 ~ file: cartReducer.js:6 ~ cartReducer ~ product:',
        product
      );
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default cartReducer;
