import { useEffect, useState } from "react";
import { useData } from "../../hooks/useData";
import { CartEmpty } from "./CartEmpty";
import { CartCard } from "./CartCard";
import { CartTotal } from "./CartTotal";
import { ToastContainer } from "react-toastify";
import { getCartAPICall } from "../../apiCall";
import { Loader } from "../loader/Loader";

export const Cart = () => {
  const { dispatch } = useData();
  const { itemsInCart } = useData();
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    (async () => {
      try {
        const response = await getCartAPICall();
        const cartItems = response.data.cartItems;
        dispatch({ type: "INITIALIZE_CART", payload: { cartItems } });
      } catch (error) {
        setShowError(error);
      } finally {
        setShowLoader(false);
        setShowError(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {showLoader && (<span><Loader /></span>)}
      </div>
      <div>{showError && <span>Error Occured...</span>}</div>
      <div className="cart-grid">
        <div className="cart-total">
          {itemsInCart.length > 0 ? <CartTotal cart={itemsInCart} /> : ""}
        </div>
        <div className="container cart-content">
          {itemsInCart.length > 0 ? (
            itemsInCart.map((item) => (
              <div key={item._id}>
                <CartCard item={item} />
              </div>
            ))
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
