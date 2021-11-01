import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";
import { DataProvider } from "./contexts/productData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <Router>
        <AuthProvider>
        <App />
        </AuthProvider>
      </Router>
    </DataProvider>
  </StrictMode>,
  rootElement
);
