import React from 'react';
import cv from '../components/cv.pdf'

const Contacto = ({ dark }) => {
    return (
        <div className='contactContainer' id='contact'>
            <h1 className={dark? 'contactTitle':'contactTitleLight'}>Contactame</h1>

            <div className='contactBox'>

                <div class="form-control">
                    <div class="inputbox" id='inputName'>
                        <input required="required" type="text" />
                        <span>Nombre</span>
                        <i></i>
                    </div>
                </div>

                <div class="form-control">
                    <div class="inputbox" id='inputEmail'>
                        <input required="required" type="text" />
                        <span>Correo</span>
                        <i></i>
                    </div>
                </div>
                <textarea className={dark ? 'formText' : 'lightFormText'} name="Message" rows={7} cols={35} placeholder='   Hola, trabajemos juntos...' required></textarea>

                <button className={dark?'submit':'submitLight'} type="submit">
                    Enviar
                </button>

                <section className='contactLink'>
                    <a href="https://www.linkedin.com/in/brandon-de-la-rosa-3b0870259/" target="_blank"><h6></h6><i class="fa-brands fa-linkedin-in"></i></a>
                    <a download="Cv BrandonDeLaRosa" href={cv}><i class="fa-regular fa-file"></i></a>
                    <a href="https://github.com/BrandonDeLaRosa" target="_blank"><i class="fa-brands fa-github"></i></a>
                    <a href="https://wa.me/5522979911?text=Hola%20me%20interesa%20ponerme%20en%20contacto%20contigo. " target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </section>
            </div>
        </div>
    );
};

export default Contacto;