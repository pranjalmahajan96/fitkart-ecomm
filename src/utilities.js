import { useData } from "./hooks/useData";
import {
  addItemToWishlistAPICall,
  addItemToCartAPICall,
  removeItemFromCartAPICall,
  removeItemFromWishlistAPICall,
  incQtyInCartAPICall,
  decQtyInCartAPICall
} from "./apiCall";

export const useUserActions = () => {
  const { itemsInWishlist, itemsInCart, dispatch } = useData();

  const addToWishlistCB = async (item) => {
    const isAlreadyInWishlist = itemsInWishlist.find(
      (wishlistItem) => item._id === wishlistItem.product_id._id
    );

    if (isAlreadyInWishlist) {
      dispatch({
        type: "ALREADY_IN_WISHLIST"
      });
    } else {
      const response = await addItemToWishlistAPICall(item._id);
      if (response.data.success) {
        dispatch({
          type: "ADD_TO_WISHLIST",
          payload: { item }
        });
      }
    }

    return;
  };

  const addToCartCB = async (item) => {
    const isAlreadyInCart = itemsInCart.find(
      (cartItem) => item._id === cartItem.product_id._id
    );

    if (isAlreadyInCart) {
      const response = await incQtyInCartAPICall(isAlreadyInCart);
      const item = isAlreadyInCart.product_id;
      if (response.data.success) {
        dispatch({
          type: "INCREASE_QTY_EXIST",
          payload: { item }
        });
      }
    } else {
      const response = await addItemToCartAPICall(item._id, 1);
      if (response.data.success) {
        dispatch({
          type: "ADD_TO_CART",
          payload: { item }
        });
      }
    }

    return;
  };

  const addToCartFromWishlistCB = async (item) => {
    const isAlreadyInCart = itemsInCart.find(
      (cartItem) => item.product_id._id === cartItem.product_id._id
    );

    if (isAlreadyInCart) {
      const response = await incQtyInCartAPICall(isAlreadyInCart);
      const item = isAlreadyInCart.product_id;
      if (response.data.success) {
        dispatch({
          type: "INCREASE_QTY_EXIST",
          payload: { item }
        });
      }
    } else {
      const response = await addItemToCartAPICall(item.product_id._id, 1);
      if (response.data.success) {
        dispatch({
          type: "ADD_TO_CART",
          payload: { item }
        });
      }
    }
    return;
  };

  const removeFromWishlistCB = async (item) => {
    const response = await removeItemFromWishlistAPICall(item._id);
    if (response.data.success) {
      dispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: { item }
      });
    }
  };

  const removeFromCartCB = async (item) => {
    const response = await removeItemFromCartAPICall(item._id);
    if (response.data.success) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { item }
      });
    }
  };

  const incQtyCB = async (item) => {
    const response = await incQtyInCartAPICall(item);
    if (response.data.success) {
      dispatch({
        type: "INCREASE_QTY",
        payload: { item }
      });
    }
  };

  const decQtyCB = async (item) => {
    const response = await decQtyInCartAPICall(item);
    if (response.data.success) {
      dispatch({
        type: "DECREASE_QTY",
        payload: { item }
      });
    }
  };

  return {
    addToWishlistCB,
    addToCartCB,
    addToCartFromWishlistCB,
    removeFromWishlistCB,
    removeFromCartCB,
    incQtyCB,
    decQtyCB
  };
};
