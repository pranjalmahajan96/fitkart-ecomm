import axios from "axios";

const baseURL = "https://fitkartapi.pranjalmahajan.repl.co";

export const getProductsAPICall = async () => {
  const response = await axios.get(`${baseURL}/products`);
  return response;
};

export const getWishlistAPICall = async () => {
  const response = await axios.get(`${baseURL}/wishlist`);
  return response;
};

export const getCartAPICall = async () => {
  const response = await axios.get(`${baseURL}/cart`);
  return response;
};

export const addItemToWishlistAPICall = async (_id) => {
  const response = await axios.post(`${baseURL}/wishlist`, {
    product_id: { _id }
  });
  return response;
};

export const addItemToCartAPICall = async (_id, q) => {
  const response = await axios.post(`${baseURL}/cart`, {
    product_id: _id,
    qty: q
  });
  return response;
};

export const removeItemFromCartAPICall = async (_id) => {
  const response = await axios.delete(`${baseURL}/cart/${_id}`);
  return response;
}; // working => check id = id should be of the cart item and not the product id

export const removeItemFromWishlistAPICall = async (_id) => {
  const response = await axios.delete(`${baseURL}/wishlist/${_id}`);
  return response;
}; // working => check id = id should be of the wishlist item and not the product id

export const incQtyInCartAPICall = async (item) => {
  const q = item.qty + 1;
  const response = await axios.post(`${baseURL}/cart/${item._id}`, { qty: q });
  return response;
};

export const decQtyInCartAPICall = async (item) => {
  const q = item.qty - 1;
  const response = await axios.post(`${baseURL}/cart/${item._id}`, { qty: q });
  return response;
};
