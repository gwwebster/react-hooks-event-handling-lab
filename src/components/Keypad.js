import React from 'react';

function Keypad (){
    return (
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" placeholder="Enter password..." onChange={() => console.log('Entering password...')} />
        </div>
    )
}

export default Keypad;