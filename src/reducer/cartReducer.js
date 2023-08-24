export const cartReducer = (state, action) => {
   const { type, payload } = action; 
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.products };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };

    case "UPDATE_TOTAL":
      return;

    default:
      throw new Error("No Case Found in cart reducer");
  }
};
