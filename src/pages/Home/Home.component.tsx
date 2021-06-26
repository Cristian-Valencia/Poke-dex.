import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input.component';
import { getGeneralPokemon } from 'services/generalPokemonService';
import { getDetailPokemon } from 'services/cardDetailPokemonService';
import Card from 'components/Card/Card.container';

const Home = (props:any) => {

    const [pokemonArray, setPokemonArray] = useState([]);

    useEffect(() => {

        getGeneralPokemon()
            .then((response:any)=>{
                setPokemonArray(response.results);
            });
        
    }, []);

    useEffect(() => {
        pokemonArray &&
            props.savePokemonArray(pokemonArray);
    }, [pokemonArray])

    return (
        <div>

            <Input />

            <Link to="/about">
                <Card />
            </Link>
            
        </div>
    )
}

export default Home;
