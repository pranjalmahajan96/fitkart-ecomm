import { NavLink } from "react-router-dom";

export const WishlistEmpty = () => {
  return (
    <div className="centered-div">
      <div className="card card-shadow">
        <h3> Your Wishlist is Empty. </h3>
        <NavLink to="/" className="link link-empty">
          Add items to your Wishlist!
        </NavLink>
      </div>
    </div>
  );
};
