import React from 'react';
import Typewriter from 'typewriter-effect';
import cv from '../components/cv.pdf'

const Inicio = ({dark}) => {
    return (
        <div className='homeContainer' id='home'>

            <div className='homeTxt1'>
                <h1 className='homeTitle'>¡Bienvenido, soy!</h1>
            </div>

            <section className={dark? 'typeWriter' : 'typeWriterLight'}>

                <Typewriter
                    options={{
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter.typeString("Brandon De La Rosa.")
                        .pauseFor(2000)
                        .deleteAll()
                            .typeString('Desarrollador web front-end.')
                            .pauseFor(2000)
                            .deleteAll()
                            .start();
                    }}
                />

            </section>

            <section className='about'>

                <button className='dwnTp'><a className='aDwnTp' download="Cv BrandonDeLaRosa" href={cv}>Descargar CV</a></button>
                
                <div className='homeTxt2'>
                    <h1 className={dark? 'homeTitle2' : 'homeTitle2Light'}>Sobre mi</h1>
                    {/* <div className='box1'></div> */}
                    <p className='homeTxt3'>
                        Desarrollador web full-stack,
                        apasionado de la música, videojuegos y el deporte.
                        Proactivo, autodidacta, creativo.
                        En constante búsqueda de crecimiento
                        personal y profesional.
                    </p>

                </div>
            </section>

            <section className='extras'>
                <div className={dark? 'xtraBx' : 'xtraBxLight'}>
                    <i class="fa-regular fa-handshake"></i>
                    <p><b>Idiomas</b></p>
                    <p className='xBA'>Español Nativo / Ingles C 1.</p>
                </div>
                <div className={dark? 'xtraBx' : 'xtraBxLight'}>
                <i class="fa-brands fa-medapps"></i>
                    <p className='exp'><b>Experiencia</b></p>
                    <p className='xBA1'>1 año </p> <br />
                    <p className='xBA2'>6 meses</p>
                </div>
            </section>          


            
        </div>
    );
};

export default Inicio;
