import ReactDOM from "react-dom";
import React from 'react';
window.React = React;

//import css
import "./statics/load-css.js";

//import router
import router from "./router";
let routerConfig = router.getConfig();
ReactDOM.render(routerConfig, document.getElementById('app'))
