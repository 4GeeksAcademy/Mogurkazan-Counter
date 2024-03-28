import React from "react";


//crear el componente
const SecondsCounter = (props) => {
    

    return    (
        <>
            <div className="reloj container-fluid ">
                <div className=" row justify-content-center align-items-center mt-3 bg-dark h-100">
                    <div className="cardClock  d-flex justify-content-center align-items-center mx-1 rounded"><i className="far fa-clock"></i></div>
                    <div className="cardNum d-flex justify-content-center align-items-center  mx-1 rounded text-light">{props.secs[0]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center  mx-1 rounded text-light">{props.secs[1]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center  mx-1 rounded text-light">{props.secs[2]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center  mx-1 rounded text-light">{props.secs[3]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center  mx-1 rounded text-light">{props.secs[4]}</div>
                    <div className="cardNum d-flex justify-content-center align-items-center  mx-1 rounded text-light">{props.secs[5]}</div>
                </div>
            </div>
        </>
    )
}

export default SecondsCounter;