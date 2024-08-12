import React, { useState } from 'react';
import { ButtonComponent } from './Button';

const Toggle = () => {
    const [flag, setFlag] = useState(true);  // Use state to manage flag

    const toggle = () => {
        setFlag(prevFlag => !prevFlag);  // Update state
    };

    return (
        <div>
            {flag ? (
                <div className="text">
                    <h1>Here is the text</h1>
                </div>
            ) : null}
            
            <ButtonComponent toggle={toggle} />
        </div>
    );
};

export default Toggle;
