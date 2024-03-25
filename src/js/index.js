//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

const reloj = 0;
function secondsCounter(){
    for (let i = 0; i <= 9; i++){
        return reloj += i;
    }
}
console.log(secondsCounter(reloj))