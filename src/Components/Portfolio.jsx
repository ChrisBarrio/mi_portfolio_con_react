import React from "react";
import './portfolio.css';
import webgame from '../assets/gameWebDevelopment.png'
import appTodo from '../assets/apptodo.png'
import gameboy from '../assets/GameBoy.png'
import {DiReact} from "react-icons/di"
import {MdAspectRatio} from "react-icons/md"
import landpage from '../assets/landpage.png'
import travelblog from '../assets/travelBlog.png'
import travelBlog2 from '../assets/travelBlog2.png'

function Portfolio () {
    return (
        <section className="
        container-portfolio">
            <div className="container-grid">
                {/* primero */}
                <figure>
                    <a href="https://practical-aryabhata-c8fc3d.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={webgame} alt="proyecto_nombre"/>
                    </a>
                    <figcaption className="texto--hover">
                        Single Page responsive <MdAspectRatio/>
                    </figcaption>
                </figure>
                {/* segundo */}
                <figure>
                    <a href="https://chrisbarrio-app-todo.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={appTodo} alt="proyecto_nombre"/>
                    </a>
                    <figcaption className="texto--hover">
                        App de tareas con React <DiReact/>
                    </figcaption>
                </figure>
                {/* tercero */}
                <figure>
                    <a href="https://mellifluous-marigold-a9e9d8.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={gameboy} alt="proyecto_nombre"/>
                    </a>
                    <figcaption className="texto--hover">
                        Gameboy con Css 100%
                    </figcaption>
                </figure>
                {/* cuatro */}
                <figure>
                    <a href="https://eloquent-heisenberg-369a62.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={landpage} alt="proyecto_nombre"/>
                    </a>
                    <figcaption className="texto--hover">
                        Landpage Responsive
                    </figcaption>
                </figure>
                {/* cinco */}
                <figure>
                    <a href="https://golden-kashata-cc3e8b.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={travelblog} alt="proyecto_nombre"/>
                    </a>
                    <figcaption className="texto--hover">
                        Blog de viajes
                    </figcaption>
                </figure>
                {/* sexto */}
                <figure>
                    <a href="https://festive-rosalind-4becf9.netlify.app" target="_blank" rel="noopener noreferrer">
                        <img src={travelBlog2} alt="proyecto_nombre"/>
                    </a>
                    <figcaption className="texto--hover">
                        Empresa de turismo - Responsive
                    </figcaption>
                </figure>
            </div>
            
        </section>
    );
}

export default Portfolio;