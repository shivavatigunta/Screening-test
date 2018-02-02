import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./reducerStore";
import Routes from "./router";
import "./style.scss";

//Mount
render(	
	<Provider store={store}>
		<Routes />				
	</Provider>,
	document.getElementById("react-mount")
);