import React from "react";
import './error.css'
import sheep from '../assets/error-mee.png'

function Error () {
    return (
        <section className="container-error">
            <h3>Meeehhh! parece que te equivocaste. . . la pagina ingresada no existe</h3>
            <p>No te preocupes 🖐🏽. Yo estoy aqui para ayudarte, ingresa 👉🏽<b>aqui</b> y seras redireccionado/a a la pagina principal</p>
            <img src={sheep} alt='sheep-error'/>
        </section>
    );
}

export default Error;