import React, { useState } from 'react';
import './Input.scss';
import { getPokemonSearched } from 'services/getPokemonSearchService';

const Input = (props:any) => {

    const [name, setName] = useState("");

    const handleOnBlur = (e:any) => {
        e.preventDefault();

        getPokemonSearched(name.toLowerCase())

            .then((response)=>{
                console.log(response);
                props.setError(false);
                props.savePokemonSearched(response);
            })
            .catch(()=>{
               props.setError(true);
            })
        
    }

    return (
        <form className='input' onSubmit={handleOnBlur}>

            <h2>Are you looking for a Pokémon?</h2>
            
            <input 
                type="text" 
                placeholder='What Pokémon are you looking for?' 
                value = {name}
                onChange={e => setName(e.target.value)} 
            />

        </form>
    )
}

export default Input;
