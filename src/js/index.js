//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/secondscounter.jsx";

//import your own components


//render your react application
setInterval(secondsCount, 1000)
let contador = 0
function secondsCount (){
    contador = contador + 1
    const conCeros = String(contador).padStart(6, '0');
    const digitos = conCeros.split('').map(Number);
    console.log(digitos[6])
    //render
    ReactDOM.render(<SecondsCounter secs={digitos}/>, document.querySelector("#app"));
}