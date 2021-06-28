import React, { useEffect, useState } from 'react';
import './PokemonPage.scss';
import { getPokemonSearched } from 'services/getPokemonSearchService';
import Stats from './Stats/Stats.container';
import About from './About/About.container';
import Evolutions from './Evolutions/Evolutions.container';

const PokemonPage = (props:any) => {

    const [name, setName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    const [selectedArea, setSelectedArea] = useState("About");
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        
        setName(localStorage.getItem("pokemonName") || "" );

        getPokemonSearched(name)
            .then((response:any)=>{
                setPokemonImage(`https://pokeres.bastionbot.org/images/pokemon/${response.id}.png`);
                // console.log(response);
                props.savePokemonSingle(response);
            })

        // console.log(name);

    }, [name])



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

    const handleSwitch = (name:string) =>{

        switch(name){
            case "Stats":
                return <Stats />


            case "Evolutions":
                return <Evolutions />

            default:
                return <About />
        }
    };


    return (
        <div className='pokemonpage'>



            <header className='pokemonpage-header'>

                

                {
                    props.pokemonSelected.detail &&
                        <div className='pokemonpage-text-container'>
                            <h2 className='pokemonpage-text-id'>#{props.pokemonSelected.detail.id}</h2>
                            <h1 className='pokemonpage-text-name'>{props.pokemonSelected.detail.name}</h1>
                            {
                                props.pokemonSelected.detail.types &&
                                    <p className='pokemonpage-text-type'>{props.pokemonSelected.detail.types[0].type.name}</p>
                            }

                            {
                                props.pokemonSelected.detail.types &&
                                    props.pokemonSelected.detail.types.length > 1 &&
                                        <p className='pokemonpage-text-type'>{props.pokemonSelected.detail.types[1].type.name}</p>
                            }
                        </div>
                }
                    
                    



                <div className='pokemonpage-header-image-container'>

                    {
                        props.pokemonSelected.detail &&
                            <img 
                                src={pokemonImage} 
                                alt="pokemon-selected-image" 
                                className='pokemonpage-header-image' 
                            />
                    }

                </div>



            </header>

            <div className='pokemonpage-btn-container'>
                {
                    pages.map((el,index)=>
                        <div
                            className={
                                selectedIndex === index ? 
                                'pokemonpage-btn pokemonpage-active' 
                                : 
                                'pokemonpage-btn pokemonpage-not-active'
                            }
                            key={index}
                            onClick={()=>{setSelectedArea(el.name); setSelectedIndex(index)}}
                        >
                            <h2>{el.name}</h2>
                        </div>
                    )
                }
            </div>

            
            { handleSwitch( selectedArea ) }

            
        </div>
    )
}

export default PokemonPage;
