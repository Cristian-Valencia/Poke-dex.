import React, { useEffect } from 'react';
import './Card.scss';
import { getDetailPokemon } from 'services/cardDetailPokemonService';

const Card = (props:any) => {
    
    props.pokemonArray &&
        console.log(props.pokemonArray);

    useEffect(() => {

        props.pokemonArray.general &&
            props.pokemonArray.general.map((el:any)=>{

                let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${el.name}`;

                getDetailPokemon(pokemonUrl)
                    .then((response:any)=>{
                        props.savePokemonArray(response);
                    })

            })
        

    }, [props.pokemonArray])

    console.log(props);

    return (
        <div className='card'>

            <div className='card-pokemon'>
                {
                    props.pokemonCard.detail &&
                        props.pokemonCard.detail
                            .sort((a:any,b:any)=>a.id-b.id)
                            .map((el:any)=>{

                                return <div className='card-pokemon-container'>

                                            <h2>{el.id}</h2>
                                            <h2>{el.name}</h2>

                                       </div>

                            })
                }
            </div>
            
        </div>
    )
}

export default Card;
