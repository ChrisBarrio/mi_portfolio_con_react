import React from "react";
import './contacto.css'

function Contacto () {
    return (
        <section className="container-contacto">
            <form>
                <h2 className="css-typing">Contactame</h2>
                <input type="text" placeholder="nombre"/>
                <input type="email"placeholder="email" />
                <textarea name="" id="" cols="60" rows="7" placeholder="Escriba aqui . ."></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contacto;