import { NavLink, useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loginHandlerAsync } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginHandler = (email, password) => {
    if (email === "" || password === "") {
      return setError("All the fields are required");
    } else {
      loginHandlerAsync({ email, password }); 
     navigate(state?.from ? state.from : "/")
    }
  };

  return (
    <div>
      <div className="container-form ">
        <div className="wrapper-input">
          <h2>FitKart </h2>
          <label htmlFor="" className="input-label">
            Email Id
          </label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="" className="input-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <div>{error === "" ? null : error}</div>
          </div>
          <div>
            <button
              className="btn btn-filled btn-no-hover centered-div"
              style={{ display: "block" }}
              type="submit"
              onClick={() => loginHandler(email, password)}
            >
              LOGIN
            </button>
          </div>
        </div>

        <div>
          Don't have an account
          <NavLink className="link link-form btn-outline" to="/signup">
            SIGN UP
          </NavLink>
        </div>
      </div>
    </div>
  );
};
