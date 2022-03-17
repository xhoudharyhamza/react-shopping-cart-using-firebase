// create reducer function
export default (state, action) => {
  switch (action.type) {
    case "Add_Data":
      return {
        ...state,
        products: action.payload.parseData,
      };
    case "Add_To_Cart":
      return {
        ...state,
        cart:[...state.cart, action.payload],
      };
      case "Remove_Cart_Item":
        return{
          ...state,
          cart:[...action.payload.cartItem]
        }
    default:
      return {
        ...state,
      };
      break;
  }
};
