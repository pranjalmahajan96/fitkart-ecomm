import { NavLink } from "react-router-dom";
import { useData } from "../../hooks/useData";
import { useAuth } from "../../hooks/useAuth";

export const Navbar = () => {
  const { itemsInCart, itemsInWishlist } = useData();
  const { login, logoutHandler } = useAuth();
 
  return (
      login 
      ? <div>
        <nav className="navigation">
          <div className="nav-brand">
            <NavLink to="/" className="link">
              FitKart
            </NavLink>
          </div>

          <ul className="list-non-bullet nav-pills">
            <li className="list-item-inline">
              <NavLink to="/wishlist" className="link link-active">
                Wishlist
              ({itemsInWishlist?.length !== 0
                  ? `${itemsInWishlist?.length}`
                  : ""})
              </NavLink>
            </li>

            <li className="list-item-inline">
              <NavLink to="/cart" className="link link-active">
                Cart
              ({itemsInCart?.length !== 0
                  ? `${itemsInCart
                      ?.map((item) => item.qty)
                      .reduce((ac, cv) => ac + cv, 0)}`
                  : ""})
              </NavLink>
            </li>

            <li className="list-item-inline">
              <NavLink to="/login" className="link link-active">
                  <button
                    className="btn btn-outline btn-no-hover"
                    onClick={() => logoutHandler() }
                  > Logout  </button> 
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    : <div>
        <nav className="navigation">
          <div className="nav-brand">
            <NavLink to="/" className="link">
              FitKart
            </NavLink>
          </div>

          <ul className="list-non-bullet nav-pills">
           
            <li className="list-item-inline">
              <NavLink to="/login" className="link link-active">
                  Login
              </NavLink>
            </li>
            
          </ul>
        </nav>
    </div>
  );
};
