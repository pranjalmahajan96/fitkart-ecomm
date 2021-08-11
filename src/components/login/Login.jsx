import { useAuth } from "../../hooks/useAuth";
import { LoginForm } from "./LoginForm";

export const Login = () => {
    const { login, logoutHandler } = useAuth();
    // console.log({login});

  return login ? (
    <>
      <div className="container-form card card-shadow">
         You are already logged in
        <button
          className="btn btn-filled btn-no-hover"
         onClick={()=>logoutHandler()}
        > LogOut
        </button>
      </div>
    </>
  ) : (
    <div>
      <LoginForm />
    </div>
  );

};
