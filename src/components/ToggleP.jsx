import React, { useState } from 'react';
import Front from '../components/Front';
import Back from '../components/Back';

const ToggleP = ({lang,dark}) => {
    const [front, setFront] = useState(true)
    return (
        <div className='togglePCont'>

            <label class="toggle-switch">
                <input type="checkbox" onClick={() => setFront(!front)}/>
                <div class="toggle-switch-background">
                    <div class="toggle-switch-handle"></div>
                </div>
            </label>
            {front? <Front lang={lang} dark={dark}/> : <Back lang={lang} dark={dark}/>}
        </div>
    );
};

export default ToggleP;
