import React, { useEffect, useState } from 'react';
import './PokemonPage.scss';
import { getPokemonSearched } from 'services/getPokemonSearchService';
import Stats from './Stats/Stats.container';
import About from './About/About.container';
import Evolutions from './Evolutions/Evolutions.container';
import { getSpecies } from 'services/getSpeciesPokemonService';
import store from 'redux/store';
import { fetchSingleDetail } from 'redux/pokemonSelected/pokemonSelected.action';
import { fetchSpeciesSuccess } from 'redux/speciesPokemon/speciesPokemon.action';

const PokemonPage = (props:any) => {

    const [name, setName] = useState("");
    const [pokemonImage, setPokemonImage] = useState("");
    const [selectedArea, setSelectedArea] = useState("About");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [captured, setCaptured] = useState<boolean>(false);

    useEffect(() => {
        
        setName(localStorage.getItem("pokemonName") || "" );

        name!=="" && 
            getPokemonSearched(name)
                .then((response:any)=>{
                    setPokemonImage(`https://pokeres.bastionbot.org/images/pokemon/${response.id}.png`);
                    // console.log(response);
                    store.dispatch(fetchSingleDetail(response));
                    getSpecies(response.species.url)
                        .then((res)=>{
                            store.dispatch(fetchSpeciesSuccess(res));
                        })
                });

    }, [name])

    // console.log(props);



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

    const addCaptured = () => {
        props.savePokemonCaptured(props.pokemonSelected.single);
    }

    const pokemonCaptured = () =>{
        setCaptured(!captured);
    }

    console.log(props);

    const removeCaptured = () => {
        localStorage.removeItem("capturedPokemon");
    }

    return (
        <div className='pokemonpage'>



            <header className='pokemonpage-header'>

                

                {
                    props.pokemonSelected.single &&
                        <div className='pokemonpage-text-container'>
                            <h2 className='pokemonpage-text-id'>#{props.pokemonSelected.single.id}</h2>
                            <h1 className='pokemonpage-text-name'>{props.pokemonSelected.single.name}</h1>
                            {
                                props.pokemonSelected.single.types &&
                                    <p className={`pokemonpage-text-type ${props.pokemonSelected.single.types[0].type.name}`}>{props.pokemonSelected.single.types[0].type.name}</p>
                            }

                            {
                                props.pokemonSelected.single.types &&
                                    props.pokemonSelected.single.types.length > 1 &&
                                        <p className={`pokemonpage-text-type ${props.pokemonSelected.single.types[1].type.name}`}>{props.pokemonSelected.single.types[1].type.name}</p>
                            }
                        </div>
                }
                    
                    



                <div className='pokemonpage-header-image-container'>

                    {
                        props.pokemonSelected.single &&
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

            <div className='pokemonpage-question-container'>

                <h3 className='pokemonpage-question'>Do you already have this pokemon?</h3>
                <div className='pokemonpage-btn-container'>
                    <button className={ !captured ? "pokemonpage-yes-activated" : "pokemonpage-yes"} onClick={addCaptured}>Yes</button>
                    <button className='pokemonpage-no' onClick={removeCaptured}>No</button>
                </div>
                

            </div>

            
        </div>
    )
}

export default PokemonPage;
