import React from 'react';
import '../hojas-de-estilo/boton.css'
function Boton({texto, esclic, manejarClick}){
    return(
        <button 
            className={ esclic ? "btn_clic" : "btn_reiniciar" }
            onClick={ manejarClick }>
            {texto}
        </button>
    )
}

export default Boton;