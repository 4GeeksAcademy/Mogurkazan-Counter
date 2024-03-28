//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import SecondsCounter from "./component/secondscounter.jsx";

//import your own components


//llamamos a la función cada seg
setInterval(secondsCount, 1000)
let contador = 0
function secondsCount (){
    contador = contador + 1
    //añadimos 0s hasta tener 6 dígitos
    const conCeros = String(contador).padStart(6, '0');
    //separamos el número por dígitos
    const digitos = conCeros.split('').map(Number);
    //render
    ReactDOM.render(<SecondsCounter secs={digitos}/>, document.querySelector("#app"));
}