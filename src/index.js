import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
