import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";
import App from "./components/App.js"

import './assets/global-styles.js'

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('app')
);
