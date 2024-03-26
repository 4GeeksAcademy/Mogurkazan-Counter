import React from "react";

//crear el componente
const Seconds = (props) => {
    let digitos = props.secs.toString().split('');

    return <><p>{digitos[0]}</p>
        <p>{digitos[1]}</p>
        <p>{digitos[2]}</p>
        <p>{digitos[3]}</p>
        <p>{digitos[4]}</p>
        <p>{digitos[5]}</p>
        <p>{digitos[6]}</p>
        </>
      
        
}
//linkear componente para imprimirlo en el html/
//darle un prop al componente para modificarlo/
//utilizar cada dígito por separado/
//imprimir el prop con el 0000 que falte
//generar una funcion que cuente
//modificar el componente con setInterval()
//separar por
//
export default Seconds;