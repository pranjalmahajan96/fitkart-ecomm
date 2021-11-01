import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useUserActions } from "../../utilities";
export const ProductCard = ({ item }) => {
  const { addToWishlistCB, addToCartCB } = useUserActions();
  const { token } = useAuth();
  const navigate = useNavigate();
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
            onClick={() =>{ 
              if(token){
                addToWishlistCB(item)
              } else {
                navigate("/login");
              }
              }}
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
            onClick={() => 
              { 
                if(token){
                  addToCartCB(item)
                } else {
                  navigate("/login");
                }
                }
            }
          >
            {item?.stock === "outofstock" ? "Out Of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};
