import React from "react";
import './nav.css';
import {Link} from 'react-router-dom';
import {FaEnvelope,FaGithub,FaLinkedin} from "react-icons/fa";

function Nav () {
    
    return (
        <nav>
            <Link to='/' className="links">
            Inicio
            </Link>
            <Link to='/educacion' className="links">
            Educacion
            </Link>
            <Link to='/portfolio' className="links">
            Portfolio
            </Link>
            <Link to='/contacto' className="links">
                <FaEnvelope className="item-social"/>
            </Link>
            <div className="nav-social">
                <a href="https://github.com/ChrisBarrio" target="_blank" rel="noopener noreferrer"><FaGithub className="item-social"/></a>
                <a href="https://www.linkedin.com/in/christianbarrionuevo/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="item-social"/></a>
            </div>
        </nav>
    );
}

export default Nav;