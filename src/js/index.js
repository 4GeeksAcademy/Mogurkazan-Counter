//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));

let num = 0;
function contar(){
    if (num < 10){
        num ++;
        console.log(num);
    }else clearInterval(intervalId);
}

const intervalId = setInterval(contar, 1000)