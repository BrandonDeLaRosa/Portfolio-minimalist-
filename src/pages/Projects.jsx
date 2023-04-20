import React from 'react';
import ToggleP from '../components/ToggleP';

const Projects = ({lang}) => {
    
    return (
        <div className='projectsContainer' id='projects'>
            <h1 className='projectTitle1'>Projects</h1>
            <ToggleP lang={lang}/>
        </div>
    );
};

export default Projects;

