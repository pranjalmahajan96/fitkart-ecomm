import { NavLink } from "react-router-dom";
import { useData } from "../../hooks/useData";

export const Navbar = () => {
  const { itemsInCart, itemsInWishlist } = useData();
  return (
    <div>
      <nav className="navigation">
        <div className="nav-brand">
          <NavLink to="/" className="link">
            FitKart
          </NavLink>
        </div>

        <ul className="list-non-bullet nav-pills">
          {/* <li className="list-item-inline">
            <NavLink to="/" className="link link-active">
              Categories
            </NavLink>
          </li> */}
          <li className="list-item-inline">
            <NavLink to="/wishlist" className="link link-active">
              Wishlist{" "}
              {itemsInWishlist?.length !== 0
                ? `${itemsInWishlist?.length}`
                : ""}
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/cart" className="link link-active">
              Cart{" "}
              {itemsInCart?.length !== 0
                ? `${itemsInCart
                    ?.map((item) => item.qty)
                    .reduce((ac, cv) => ac + cv, 0)}`
                : ""}
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/" className="link link-active">
              User
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
