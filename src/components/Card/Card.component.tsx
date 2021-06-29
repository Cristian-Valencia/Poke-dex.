import React, { useEffect, useState } from 'react';
import './Card.scss';
import { getDetailPokemon } from 'services/cardDetailPokemonService';
import { Link } from 'react-router-dom';


const Card = (props:any) => {

    const [captured, setCaptured] = useState<any>();

    useEffect(() => {

        props.pokemonArray.general &&

            // console.log(props.pokemonArray.general);

            props.pokemonArray.general.map((el:any)=>{

                let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${el.name}`;

                getDetailPokemon(pokemonUrl)
                    .then((response:any)=>{
                            props.savePokemonArray(response);
                    })

            })  

    }, [props.pokemonArray.general])

    const handleOnClick = (name:string) =>{

        localStorage.setItem('pokemonName', name);

        let pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

        getDetailPokemon(pokemonUrl)
            .then((response:any)=>{
                props.savePokemonSingle(response);
        })

    }

    return (
        <div className='card'>

            <div className='card-pokemon'>
                {
                    props.statusFilter.status === "Tutti" &&
                        props.pokemonCard.detail &&
                            props.pokemonCard.detail
                                .sort((a:any,b:any)=>a.id-b.id)
                                .map((el:any, index:number)=>{

                                    let urlImage = `https://pokeres.bastionbot.org/images/pokemon/${el.id}.png`;

                                    return<Link 
                                                to ="pokemonPage" 
                                                key={index} 
                                                className="card-pokemon-link"
                                          >
                                            <div 
                                                className='card-pokemon-container' 
                                                key={index} 
                                                onClick={()=>{handleOnClick(el.name)}}
                                            >

                                                <div 
                                                    className='card-pokemon-text'
                                                >

                                                    <h2 
                                                        className='card-pokemon-text-id'
                                                    >#{el.id}</h2>
                                                    <h2 
                                                        className='card-pokemon-text-name'
                                                    >{el.name}</h2>
                                                    <p 
                                                        className={`card-pokemon-text-type ${el.types[0].type.name}`}
                                                    >{el.types[0].type.name}</p>
                                                    {el.types.length > 1 &&
                                                        <p 
                                                            className={`${el.types[1].type.name}`}
                                                        >{el.types[1].type.name}</p>
                                                    }

                                                </div>

                                                <div 
                                                    className="card-pokemon-image-container"
                                                >
                                                    <img 
                                                        className="card-pokemon-image" 
                                                        src={urlImage} 
                                                        alt="pokemon-image" 
                                                    />
                                                </div>

                                            </div>
                                            
                                        </Link>
                                })

                }

                {
                    props.statusFilter.status === "Catturati" &&
                        props.pokemonCaptured.captured &&
                            props.pokemonCaptured.captured
                                .sort((a:any,b:any)=>a.id-b.id)
                                .map((el:any, index:number)=>{

                                    let urlImage = `https://pokeres.bastionbot.org/images/pokemon/${el.id}.png`;

                                    return<Link 
                                                to ="pokemonPage" 
                                                key={index} 
                                                className="card-pokemon-link"
                                        >
                                            <div 
                                                className='card-pokemon-container' 
                                                key={index} 
                                                onClick={()=>{handleOnClick(el.name)}}
                                            >

                                                <div 
                                                    className='card-pokemon-text'
                                                >

                                                    <h2 
                                                        className='card-pokemon-text-id'
                                                    >#{el.id}</h2>
                                                    <h2 
                                                        className='card-pokemon-text-name'
                                                    >{el.name}</h2>
                                                    <p 
                                                        className={`card-pokemon-text-type ${el.types[0].type.name}`}
                                                    >{el.types[0].type.name}</p>
                                                    {el.types.length > 1 &&
                                                        <p 
                                                            className={`${el.types[1].type.name}`}
                                                        >{el.types[1].type.name}</p>
                                                    }

                                                </div>

                                                <div 
                                                    className="card-pokemon-image-container"
                                                >
                                                    <img 
                                                        className="card-pokemon-image" 
                                                        src={urlImage} 
                                                        alt="pokemon-image" 
                                                    />
                                                </div>

                                            </div>
                                            
                                        </Link>
                                })
                }
            </div>
            
        </div>
    )
}

export default Card;
