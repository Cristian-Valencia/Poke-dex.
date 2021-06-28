import React, { useEffect, useState } from 'react';
import './PokemonPage.scss';
import { getPokemonSearched } from 'services/getPokemonSearchService';

const PokemonPage = (props:any) => {

    const [name, setName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");

    useEffect(() => {
        
        setName(localStorage.getItem("pokemonName") || "" );

        getPokemonSearched(name)
            .then((response:any)=>{
                setPokemonImage(`https://pokeres.bastionbot.org/images/pokemon/${response.id}.png`);
                props.savePokemonSingle(response);
            })

            

    }, [name])

    console.log(props);

    const pages = [
        {
            name: "About",
            id: 1
        
        },
        {
            name:"Stats",
            id: 2
        },
        {
            name:"Evolutions",
            id: 3
        }
    ];

    return (
        <div className='pokemonpage'>



            <header className='pokemonpage-header'>

                

                {
                    props.pokemonSelected.detail &&
                        <div className='pokemonpage-text-container'>
                            <h2>#{props.pokemonSelected.detail.id}</h2>
                            <h1>{props.pokemonSelected.detail.name}</h1>
                            <p>{props.pokemonSelected.detail.types[0].type.name}</p>

                            {props.pokemonSelected.detail.types.length > 1 &&
                                <p>{props.pokemonSelected.detail.types[1].type.name}</p>
                            }
                        </div>
                }
                    
                    



                <div className='pokemonpage-header-image-container'>

                    {
                        pokemonImage &&
                            <img 
                                src={pokemonImage} 
                                alt="pokemon-selected-image" 
                                className='pokemonpage-header-image' 
                            />
                    }

                </div>



            </header>


            
        </div>
    )
}

export default PokemonPage;
