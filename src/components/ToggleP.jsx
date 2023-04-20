import React, { useState } from 'react';
import Front from '../components/Front';
import Back from '../components/Back';

const ToggleP = ({lang}) => {
    const [front, setFront] = useState(true)
    return (
        <div className='togglePCont'>
            {/* <div class="checkbox-wrapper-5">
                <div class="check">
                    <input type="checkbox" id="check-5" onClick={() => setEstado(!estado)} />
                    <label for="check-5"></label>
                </div>
            </div> */}

            <label class="toggle-switch">
                <input type="checkbox" onClick={() => setFront(!front)}/>
                <div class="toggle-switch-background">
                    <div class="toggle-switch-handle"></div>
                </div>
            </label>
            {front? <Front lang={lang}/> : <Back lang={lang}/>}
        </div>
    );
};

export default ToggleP;
