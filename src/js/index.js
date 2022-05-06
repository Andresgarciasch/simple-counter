import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import Home from "./component/home.jsx";

//render your react application

let counter = 0;
setInterval(() => {
	ReactDOM.render(<Home second={counter} />, document.querySelector("#app"));

	counter++;
}, 1000);
