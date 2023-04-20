import React, { useState } from 'react';
import Toggle from '../components/Toggle';


const Habilidades = ({lang}) => {
    const [skills, setSkill] = useState(false)
    return (
        <div className='skillsContainer' id='skills'>
            <h1 className='skillsTitle'>{skills ? "Habilidades blandas" : "Tecnologias"}</h1>
            <div className='techSkillsBox'>

                <Toggle estado={skills} setEstado={setSkill} lang={lang} />
                <div className='sfera'></div>
                <div className='sfera2'></div>
            </div>
        </div>
    );
};

export default Habilidades;