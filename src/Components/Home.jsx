import React from "react";
import './home.css';
import me from '../assets/me.png';


function Home () {
    return (
        <section className="container-home">
            <h1 className="css-typing">Front End Developer</h1>
            <img src={me} alt='foto'/>

            <h2>Bienvenidos a mi web:</h2>
            
            <p>Hola soy Christian 👋🏽 vivo en Buenos Aires, Argentina. Siempre fue de mi agrado la tecnología y como esta cambia para ayudar a las personas. Tuve una formación técnica en un colegio industrial del cual agrese en el año 2007. Luego pase por cursos terciarios e incluso hice cuatro años de licenciatura en una carrera de salud (kinesiología). Al no sentirme cómodo buscando mi carrera, esa que me apasionara, decidí tomarme un tiempo y poder ver que quería para mi.</p>

            <p>Esta inspiración vino durante la pandemia, y ahí pude entender el dicho que dice "no hay mal que por bien no venga". Todos tuvimos que quedarnos en casa adaptarnos al trabajo y al estudio remoto. Comencé a dar mis primeros pasos como Data Analytics en un curso de Coderhouse, en el cual aprendí la importancia de los datos (independientemente de que área sea su uso). Continué con Python en Educacion IT para mejorar en la manipulación de datos. Ahí es cuando me cruce con Javascript y quede totalmente asombrado de las cosas que se pueden hacer con este lenguaje. De ahí en más fue investigar, ver videos de youtube y seguir capacitandome siempre en forma autodidacta.</p> 
            
            <p>Actualmente soy parte de la comunidad de Platzi, academia en la que llevo más de 50 cursos tomados y en la que disfruto día a día las capacitaciones, como asi tambien los seminarios de temas relacionados al sector tech. En octubre comenzaré la tecnicatura universitaria de desarrollo web en la universidad de la matanza para ver que más puedo aprender y para lograr ese titulo universitario que me falta y tanto quiero.</p>
        </section>
    );
}

export default Home;