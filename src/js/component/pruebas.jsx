import React from "react";


let contador = 0;
const contarHastaDiezMil = () => {
    const contar = () => {
        const conCeros = String(contador).padStart(7, '0');
        const digitos = conCeros.split('').map(Number);
        console.log(digitos);
        contador ++;
        if (contador > 1000000){
            contador = 0;
        }
        document.getElementById('contador').innerText = digitos;
    }
    setInterval(contar, 1000);
}
contarHastaDiezMil();
export const Probando = () => {
 
    return (
        <div>
            
            <h2 id="contador"></h2>
        </div>
    )
}
