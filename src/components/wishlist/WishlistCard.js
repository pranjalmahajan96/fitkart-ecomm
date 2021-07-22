import { useUserActions } from "../../utilities";

export const WishlistCard = ({ item }) => {
  const { removeFromWishlistCB, addToCartFromWishlistCB } = useUserActions();
  return (
    <div className="card">
      <div className="thumbnail">
        <img
          className="card-img"
          src={item?.product_id?.imageURL}
          alt="product"
        />
      </div>
      <div>
        <h3>{item?.product_id?.name}</h3>
        <h3>₹{item?.product_id?.price}</h3>
        {item?.product_id?.fastDelivery && <h4> Fast Delivery </h4>}
        {!item?.product_id?.fastDelivery && <h4> Minimum 3 days</h4>}
        <h4>
          {item?.product_id?.stock === "instock" ? "In Stock" : "Out of Stock"}
        </h4>
        <div>
          <button
            className="btn btn-filled"
            onClick={() => removeFromWishlistCB(item)}
          >
            Remove From Wishlist
          </button>
          <span>
            <button
              className="btn btn-filled"
              onClick={() => addToCartFromWishlistCB(item)}
            >
              Add To Cart
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};
