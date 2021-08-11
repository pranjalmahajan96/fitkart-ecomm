import { createContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { isUserLoggedIn, token: savedToken } = JSON.parse(localStorage?.getItem("login")) || { isUserLoggedIn:false, token:null };
    const [login, setLogin] = useState(isUserLoggedIn);
    const [token, setToken] = useState(savedToken);
    const navigate = useNavigate();
    
    const signupHandlerAsync = async ({name, username, email, password}) => {
        try{
            const response = await axios.post("https://FitKartAPI.pranjalmahajan.repl.co/user/signup", {
                name,
                username,
                email,
                password
            });
            if(response.data.success){
                localStorage?.setItem("login", JSON.stringify({
                    token: response.data.user.token,
                    isUserLoggedIn: true
                }));
                setLogin(true);
                setToken(response.data.user.token);
                console.log("user signed up");
            }
            console.log(response.data);
        }catch (error){
            console.log("Error occured while signing up :", error.message )
        }
    }

    const loginHandlerAsync = async ({email, password}) => {
        try{
            localStorage?.clear();
            const response = await axios.post("https://FitKartAPI.pranjalmahajan.repl.co/user/login", {
                email,
                password
            });
            if(response.data.success){
              localStorage.setItem("login", JSON.stringify({
                    token: response.data.user.token,
                    isUserLoggedIn: true
             }));
             setLogin(true);
             setToken(response.data.user.token);
             console.log("user logged in");
            //  console.log(response.data);
            }  
        } catch (error){
            console.log("Error occured while logging in : ", error.message);
        }
    }

    const logoutHandler = () => {
        setLogin(false);
        setToken(null);
        localStorage?.removeItem("login");
        navigate("/login")
    }

    return (
        <AuthContext.Provider value={{ login, token, signupHandlerAsync, loginHandlerAsync, logoutHandler}} >
             {children}
        </AuthContext.Provider>
    )
}