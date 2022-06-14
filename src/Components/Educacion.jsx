import React from "react";
import './educacion.css';
import { DiHtml5,DiCss3, DiJsBadge, DiReact} from "react-icons/di";
import {FaVuejs, FaNodeJs,FaArrowLeft} from "react-icons/fa";


function Educacion(){
    
    return(
        <section className="container-educacion">
            <h2>Formacion</h2>
            <ul id="lista-cursos">
                <li>
                    <h3>Platzi</h3>
                    <p>Front End Developer 2022</p>
                </li>
                <li>
                    <h3>Programa Codo A Codo 3.0 (Gobierno De La Ciudad De Buenos Aires)</h3>
                    <p>Programacion FullStack NodeJS - 2022</p>
                </li>
                <li>
                    <h3>Programa Codo A Codo 2.0 (Gobierno De La Ciudad De Buenos Aires)</h3>
                    <p>Programacion FullStack Python - 2021</p>
                </li>
                <li>
                    <h3>Coder House</h3>
                    <p>Data Analytics- 2021</p>
                </li>
            </ul>
            <h2>Skills</h2>
            <ul className="row">
                <li>Html <DiHtml5/></li>
                <li>Css <DiCss3/></li>
                <li>Javascript <DiJsBadge/></li>
                <li>Reactjs<DiReact/></li>
                <li>Vuejs<FaVuejs/></li>
                <li>Nodejs<FaNodeJs/></li>
            </ul>
            <p className="parrafo-linkedin">Para ver mis certificaciones te invito a visitar mi perfil de <a href="https://www.linkedin.com/in/christianbarrionuevo/" target="_blank" rel="noopener noreferrer">Linkedin</a><FaArrowLeft className="arrow-left"/></p>
        </section>
        
        );
    }
    
    // const estudios = [
    
    //     {
    //         institucion:'Platzi', 
    //         nombre:'Front End Developer 2022'
    //     },
    //     {
    //         institucion:'Programa Codo A Codo 3.0 (Gobierno De La Ciudad De Buenos Aires)',
    //         nombre:'Programacion FullStack NodeJS - 2022'
    //     },
    //     {
    //         institucion:'Programa Codo A Codo 2.0 (Gobierno De La Ciudad De Buenos Aires)',
    //         nombre:'Programacion FullStack Python - 2021'
    //     },
    //     {
    //         institucion:'Coder House',
    //         nombre:'Data Analytics- 2021'
    //     },
    // ];

    // const listaCursos = estudios.map(function (e) {
    //     return `<li>
    //         <h3>${e.nombre}</h3>
    //         <p>${e.institucion}</p>
    //     </li>`;
    // });

    
    // document.getElementById("lista-cursos").innerHTML = listaCursos


    export default Educacion;