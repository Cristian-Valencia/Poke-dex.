import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input.container';
import { getGeneralPokemon } from 'services/generalPokemonService';
import { getDetailPokemon } from 'services/cardDetailPokemonService';
import Card from 'components/Card/Card.container';
import Pagination from 'components/Pagination/Pagination.component';
import NoResult from 'pages/NoResult/NoResult.component';

const Home = (props:any) => {

    const [pokemonArray, setPokemonArray] = useState([]);
    const [error, setError] = useState(false);

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

            {error ?

            <Link to="/">
                <NoResult setError={setError} />
            </Link>

            :

            <Link to="/about">
                <Card setError={setError} />
            </Link>

            }

            <Pagination />
            
        </div>
    )
}

export default Home;
