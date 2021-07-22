import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { DataProvider } from "./contexts/productData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DataProvider>
      <Router>
        <App />
      </Router>
    </DataProvider>
  </StrictMode>,
  rootElement
);
