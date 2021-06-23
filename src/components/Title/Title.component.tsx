import React, { useEffect, useState } from 'react' ;
import styles from './Title.module.scss' ;
import {getGeneralPokemon} from '../../services/generalPokemonService' ;

const Title = ( props:any ) => {

    const[ pokemonUrl, setPokemonUrl ] = useState() ;

    useEffect(()=>{

        getGeneralPokemon()
        .then((response:any)=>{
            setPokemonUrl(response) ;
        })

        console.log(props) ;

    },[]) ;

    if(pokemonUrl!==undefined){
        console.log(pokemonUrl) ;
    }

    

    

    return (

        <div className={styles.titleContainer}>
            <h1>Pokédex App</h1>
        </div>

    )
};

export default Title ;