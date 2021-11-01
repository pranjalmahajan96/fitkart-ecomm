import { customToast } from "../components/toast/Toast";
import { addToCart, addToWishlist } from "./helper";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_WISHLIST":
      return {
        ...state,
        itemsInWishlist: [...action.payload.wishlistItems]
      };

    case "INITIALIZE_CART":
      return {
        ...state,
        itemsInCart: [...action.payload.cartItems]
      };

    case "ADD_TO_CART":
      customToast("Added To Cart");
      const cartArr = addToCart(state.itemsInCart, action.payload.item);
      return {
        ...state,
        itemsInCart: cartArr
      };

    case "REMOVE_FROM_CART":
      customToast("Removed From Cart");
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (item) => item._id !== action.payload.item._id
        )
      };

    case "INCREASE_QTY":
      customToast("Quantity Increased");
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload.item._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      };

    case "INCREASE_QTY_EXIST":
      customToast("Already In Cart, Quantity Increased");
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload.item._id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      };

    case "DECREASE_QTY":
      customToast("Quantity Decreased");
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item._id === action.payload.item._id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
      };

    case "ADD_TO_WISHLIST":
      customToast("Added To Wishlist");
      const wishlistArr = addToWishlist(
        state.itemsInWishlist,
        action.payload.item
      );
      return {
        ...state,
        itemsInWishlist: wishlistArr
      };

    case "REMOVE_FROM_WISHLIST":
      customToast("Removed From Wishlist");
      return {
        ...state,
        itemsInWishlist: state.itemsInWishlist.filter(
          (item) => item._id !== action.payload.item._id
        )
      };

    case "ALREADY_IN_WISHLIST":
      customToast("Already In Wishlist");
      return { ...state };

    case "PRICE_HIGH_TO_LOW":
      return { ...state, sortBy: "PRICE_HIGH_TO_LOW" };

    case "PRICE_LOW_TO_HIGH":
      return { ...state, sortBy: "PRICE_LOW_TO_HIGH" };

    case "TOGGLE_INVENTORY":
      return {
        ...state,
        includeOutOfStock: !state.includeOutOfStock
      };

    case "TOGGLE_DELIVERY":
      return {
        ...state,
        fastDeliveryOnly: !state.fastDeliveryOnly
      };

    default:
      console.log("you are breaking something");
      break;
  }
};
