import React, { useState } from 'react';

function Keypad() {
    const [password, setPassword] = useState('');

    function handlePasswordInput(event) {
        console.log('Entering password...');
    }

    return (
        <input onChange={handlePasswordInput} type="password" />
    )
}
export default Keypad;