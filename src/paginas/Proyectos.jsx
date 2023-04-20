import React from 'react';
import ToggleP from '../components/ToggleP';

const Proyectos = ({lang}) => {
    return (
        <div className='projectsContainer' id='projects'>
            <h1 className='projectTitle1'>Proyectos</h1>
            <ToggleP lang={lang}/>
            
        </div>
    );
};

export default Proyectos;