import React, { useEffect } from 'react';
import './Card.scss';
import { getDetailPokemon } from 'services/cardDetailPokemonService';

const Card = (props:any) => {
    
    // props.pokemonArray &&
    //     console.log(props.pokemonArray);

    useEffect(() => {

        props.pokemonArray.general &&
            props.pokemonArray.general.map((el:any)=>{

                let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${el.name}`;

                getDetailPokemon(pokemonUrl)
                    .then((response:any)=>{
                        if(props.pokemonCard.detail.includes!== true){
                            props.savePokemonArray(response);
                        }
                    })

            })
        

    }, [props.pokemonArray])

    // console.log(props);

    return (
        <div className='card'>

            <div className='card-pokemon'>
                {
                    props.pokemonCard.detail &&
                        props.pokemonCard.detail
                            .sort((a:any,b:any)=>a.id-b.id)
                            .map((el:any, index:number)=>{

                                let urlImage = `https://pokeres.bastionbot.org/images/pokemon/${el.id}.png`;

                                return <div className='card-pokemon-container' key={index}>

                                            <div className='card-pokemon-text'>

                                                <h2 className='card-pokemon-text-id'>#{el.id}</h2>
                                                <h2 className='card-pokemon-text-name'>{el.name}</h2>
                                                <p className='card-pokemon-text-type'>{el.types[0].type.name}</p>
                                                {el.types.length > 1 &&
                                                    <p>{el.types[1].type.name}</p>
                                                }

                                            </div>

                                            <div className="card-pokemon-image-container">
                                                <img className="card-pokemon-image" src={urlImage} alt="pokemon-image" />
                                            </div>
                                            

                                       </div>

                            })
                }
            </div>
            
        </div>
    )
}

export default Card;
