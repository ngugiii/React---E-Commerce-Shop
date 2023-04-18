import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ProductsProvider } from "./contexts/products.context";

ReactDOM.render(
  <Provider store={store}>
    <ProductsProvider>
    <App />
    </ProductsProvider>
  </Provider>,
  document.getElementById("root")
);
