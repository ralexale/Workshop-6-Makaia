import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter";
import { Provider } from "react-redux";
import "./index.css";
import store from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
