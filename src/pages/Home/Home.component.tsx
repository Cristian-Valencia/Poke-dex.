import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input.container';
import { getGeneralPokemon } from 'services/generalPokemonService';
// import { getDetailPokemon } from 'services/cardDetailPokemonService';
import Card from 'components/Card/Card.container';
import Pagination from 'components/Pagination/Pagination.container';
import NoResult from 'pages/NoResult/NoResult.component';
import store from 'redux/store';
import {fetchResetSuccess} from 'redux/arrayPokemonCardsDetail/arrayPokemonCardsDetail.action';
import {fetchGeneralSuccess} from 'redux/generalPokemon/generalPokemon.action';

const Home = (props:any) => {

    const [pokemonArray, setPokemonArray] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {

        getGeneralPokemon(0)
            .then((response:any)=>{
                store.dispatch(fetchResetSuccess());
                store.dispatch(fetchGeneralSuccess(response.results));
            });
        
    }, []);

    // useEffect(() => {
    //     pokemonArray &&
    //         props.savePokemonArray(pokemonArray);
    // }, [pokemonArray])

    // useEffect(() => {

    //     if(error){
    //         getGeneralPokemon(0)
    //             .then((response:any)=>{
    //                 setPokemonArray(response.results);
    //             });
    //     }
            
        
    // }, [error])

    return (
        <div>

            <Input setError={setError} />

            {error ?

            <NoResult setError={setError} />

            :

            <Link to="/pokemonPage">
                <Card />
            </Link>

            }

            <Pagination />
            
        </div>
    )
}

export default Home;
