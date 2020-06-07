/// <reference path="app.js" />
/// <reference path="app.js" />
//To access the store without UI 

//import store from "../src/store/index";
//import { addArticle } from "../src/actions/index";
//window.store = store;
//window.addArticle = addArticle;

//To access the store with UI (Combining react app with Redux)
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../src/store/index.js";
import App from "../src/App.js";
import 'bootstrap/dist/css/bootstrap.min.css';

// if you're in create-react-app import the files as:
// import store from "./js/store/index";
// import App from "./js/components/App.jsx";
render(
    <Provider store={store}>
        <App />
    </Provider>,
    // The target element might be either root or app,
    // depending on your development environment
    // document.getElementById("app")
    document.getElementById("root")
);