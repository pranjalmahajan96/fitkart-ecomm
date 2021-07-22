import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/navbar/navbar";
import { Products } from "./components/products/Products";
import { Cart } from "./components/cart/Cart";
import { Wishlist } from "./components/wishlist/Wishlist";
import { useData } from "./hooks/useData";
import { getCartAPICall, getWishlistAPICall } from "./apiCall";

export default function App() {
  const { dispatch } = useData();
  useEffect(() => {
    (async () => {
      const response = await getCartAPICall();
      const cartItems = response.data.cartItems;
      dispatch({ type: "INITIALIZE_CART", payload: { cartItems } });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const response = await getWishlistAPICall();
      const wishlistItems = response.data.wishlistItems;
      dispatch({ type: "INITIALIZE_WISHLIST", payload: { wishlistItems } });
    })();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
