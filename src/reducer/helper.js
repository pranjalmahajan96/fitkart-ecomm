export const addToCart = (cart, product) => {
  const cartItem = cart.find((item) => item._id === product._id);
  if (cartItem) {
    cart = cart.map((item) =>
      item._id === product._id ? { ...cartItem, qty: cartItem.qty + 1 } : item
    );
  } else {
    cart = [...cart, { ...product, qty: 1 }];
  }
  return cart;
};

export const addToWishlist = (wishlist, product) => {
  const wishlistItem = wishlist.find((item) => item._id === product._id);

  if (!wishlistItem) {
    wishlist = [...wishlist, product];
  }

  return wishlist;
};
