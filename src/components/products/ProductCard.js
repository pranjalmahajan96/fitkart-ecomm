import React from "react";
import { useUserActions } from "../../utilities";
export const ProductCard = ({ item }) => {
  const { addToWishlistCB, addToCartCB } = useUserActions();

  return (
    <div className="card card-shadow">
      <div className="thumbnail">
        <img className="card-img" src={item?.imageURL} alt="product" />
      </div>

      <div className="card-content">
        <div className="card-content-textual">
          <h3>{item?.name}</h3>
          <h4>₹{item?.price}</h4>
          {item?.fastDelivery && <h4> Fast Delivery </h4>}
          {!item?.fastDelivery && <h4> Minimum 3 days</h4>}
          <h4>{item?.stock === "instock" ? "In Stock" : "Out of Stock"}</h4>
        </div>
        <div className="card-content-btn">
          <button
            className="btn btn-outline"
            onClick={() => addToWishlistCB(item)}
          >
            Add to Wishlist
          </button>
          <button
            className={
              item?.stock === "instock"
                ? "btn btn-filled"
                : "btn btn-filled btn-disabled"
            }
            disabled={item?.stock === "outofstock" ? true : false}
            onClick={() => addToCartCB(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
