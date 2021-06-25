import React from 'react';
import './Input.scss';

const Input = () => {
    return (
        <div className='input'>

            <h2>Are you looking for a Pokémon?</h2>
            
            <input type="text" placeholder='Search it here...' />

        </div>
    )
}

export default Input;
