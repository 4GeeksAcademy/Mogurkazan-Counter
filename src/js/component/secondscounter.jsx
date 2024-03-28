import React from "react";
import { Miniatura } from "./pruebas";

//crear el componente
const SecondsCounter = (props) => {
    

    return    (
        <>
            <div className="container-fluid  mx-5 my-auto">
                <div className="row justify-content-center align-items-center">
                    <div className="cardClock col d-flex justify-content-center align-items-center"><i className="fa-regular fa-clock"></i></div>
                    <div className="cardNum d-flex justify-content-center align-items-center col mx-1 rounded text-light">{props.secs[0]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center col mx-1 rounded text-light">{props.secs[1]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center col mx-1 rounded text-light">{props.secs[2]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center col mx-1 rounded text-light">{props.secs[3]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center col mx-1 rounded text-light">{props.secs[4]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center col mx-1 rounded text-light">{props.secs[5]}</div>
                </div>
            </div>
        </>
    )
}

export default SecondsCounter;