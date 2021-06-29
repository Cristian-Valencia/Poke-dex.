import React, { useState } from 'react';
import './Input.scss';
import { getPokemonSearched } from 'services/getPokemonSearchService';
import Filter from '../Filter/Filter.container';

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

            <div className="input-container">

                <h2>Are you looking for a Pokémon?</h2>

                <Filter />

            </div>


            
            <input 
                type="text" 
                placeholder='Pokémon Name...' 
                value = {name}
                onChange={e => setName(e.target.value)} 
            />

        </form>
    )
}

export default Input;
