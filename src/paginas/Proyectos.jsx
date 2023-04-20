import React from 'react';
import rick from '../gifs/rickMorty.gif'
import weather from '../gifs/weather.gif'
import pokedex from '../gifs/pokedex.gif'
import ecom from '../gifs/ecom.gif'
import ToggleP from '../components/ToggleP';

const Proyectos = () => {
    return (
        <div className='projectsContainer' id='projects'>

            {/* <div className='sfera3'></div> */}
            {/* <div className='sfera4'></div> */}
        
            <h1 className='projectTitle1'>Proyectos</h1>
            <ToggleP/>
            <section className='gifContainer'>

                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Rick&Morty">Rick&Morty</h3>
                    <a className='gifLink' href="https://benevolent-elf-de37aa.netlify.app/" target="_blank"> <img className='gif' src={rick} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Pokedex">Pokedex</h3>
                    <a className='gifLink' href="https://coruscating-baklava-dc58d4.netlify.app/" target="_blank"><img className='gif' src={pokedex} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="eCommerce">eCommerce</h3>
                    <a className='gifLink' href="https://main--resilient-klepon-9fd703.netlify.app/#/" target="_blank"><img className='gif' src={ecom} alt="" /></a>
                </div>
                <div className='gifBox'>
                    <h3 className='projectTitle' data-text="Weather">Weather</h3>
                    <a className='gifLink' href="https://soft-strudel-34df4f.netlify.app/" target="_blank" ><img className='gif' src={weather} alt="" /></a>
                </div>

            </section>

            {/* </div> */}
        </div>
    );
};

export default Proyectos;