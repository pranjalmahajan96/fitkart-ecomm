import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useData } from "../../hooks/useData";
import { WishlistCard } from "./WishlistCard";
import { WishlistEmpty } from "./WishlistEmpty";
import { getWishlistAPICall } from "../../apiCall";
import { Loader } from "../loader/Loader";

export const Wishlist = () => {
  const { dispatch } = useData();
  const { itemsInWishlist } = useData();
  const [showLoader, setShowLoader] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    (async () => {
      try {
        const response = await getWishlistAPICall();
        const wishlistItems = response.data.wishlistItems;
        dispatch({ type: "INITIALIZE_WISHLIST", payload: { wishlistItems } });
      } catch (error) {
        setShowError(error);
      } finally {
        setShowLoader(false);
        setShowError(false);
      }
    })();
  },[]);

  return (
    <>
      <h1>Wishlist</h1>
      <div>
        {showLoader && (
          <span>
            <Loader />
          </span>
        )}
      </div>
      <div>{showError && <span>Error Occured...</span>}</div>
      <div className="container">
        {itemsInWishlist.length > 0 ? (
          itemsInWishlist.map((item) => (
            <div key={item?._id}>
              <WishlistCard item={item} />
            </div>
          ))
        ) : (
          <WishlistEmpty />
        )}
      </div>
      <ToastContainer />
    </>
  );
};
