import { NavLink } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <div className="centered-div">
      <div className="card card-shadow">
        <h3> Your cart is Empty. </h3>
        <NavLink to="/" className="link link-empty">
          Continue Shopping!
        </NavLink>
      </div>
    </div>
  );
};
