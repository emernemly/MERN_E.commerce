import { ADDTOCART, GET_CART } from "../types/cartTypes";

const initialState = {
  cart: [],
};

const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADDTOCART:
    case GET_CART:
      return { ...state, cart: payload.cart };

    default:
      return state;
  }
};
export default CartReducer;
