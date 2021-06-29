import React, { useEffect, useState } from 'react';
import './About.scss';
import store from 'redux/store';
import {fetchEvolutionSuccess} from 'redux/pokemonEvolutionDetail/pokemonEvolutionDetail.action';
import {getEvolutionsPokemon} from 'services/getPokemonEvolutionDetail';


const About = (props:any) => {

    const [descriptionArray, setdescriptionArray] = useState<any>([]);
    const [description, setDescription] = useState("");
    const [type, setType] = useState([]);

    console.log(props);


    useEffect(() => {

        Object.keys(props.pokemonSpecies.species).length > 0 &&
            setdescriptionArray(props.pokemonSpecies.species.flavor_text_entries.filter((el:any)=>{return el.language.name === "it"}));
            // console.log(descriptionArray);
            // props.pokemonSpecies.species.evolution_chain.url!==undefined &&
            //     getEvolutionsPokemon(props.pokemonSpecies.species.evolution_chain.url)
            //         .then((response)=>{
            //             store.dispatch(fetchEvolutionSuccess(response))
            //         })
            descriptionArray.length > 0 &&
                setDescription(descriptionArray[2].flavor_text);
                setType(props.pokemonSpecies.species.egg_groups);

                props.pokemonSpecies.species.evolution_chain!==undefined &&
                    getEvolutionsPokemon(props.pokemonSpecies.species.evolution_chain.url)
                        .then((response)=>{
                            store.dispatch(fetchEvolutionSuccess(response))
                        })
            
    }, [props, descriptionArray.length])

    return (
        <div className='about'>
            
            <div className='about-description-container'>
                {
                    description.length > 0 &&
                        <p>{description}</p>
                }
            </div>

        <div className='about-pokedex-title'>
            <h2>Pokédex Data:</h2>
        </div>

        <div className='about-pokedex'>

            <div className='about-pokedex-data'>
                <div className='about-pokedex-data-title-container'>
                    <h3 className='about-pokedex-data-title'>Species</h3>
                </div>
                <div className='about-pokedex-data-information-container'>
                    {
                        type &&
                            type.map((el:any, index:number)=>{
                                return <h4 
                                            key={index} 
                                            className='about-pokedex-data-information'
                                        >{el.name}</h4>
                            })
                    }
                </div>
            </div>

            <div className='about-pokedex-data'>
                <div className='about-pokedex-data-title-container'>
                    <h3 className='about-pokedex-data-title'>Height</h3>
                </div>
                <div className='about-pokedex-data-information-container'>
                    {
                        props.pokemonSelected.single.height &&
                            <h4  
                            className='about-pokedex-data-information'
                            >{props.pokemonSelected.single.height / 10} m
                            </h4>

                    }
                </div>
            </div>

            <div className='about-pokedex-data'>
                <div className='about-pokedex-data-title-container'>
                    <h3 className='about-pokedex-data-title'>Weight</h3>
                </div>
                <div className='about-pokedex-data-information-container'>
                    {
                        props.pokemonSelected.single.height &&
                            <h4  
                            className='about-pokedex-data-information'
                            >{props.pokemonSelected.single.weight / 10} Kg
                            </h4>

                    }
                </div>
            </div>

            <div className='about-pokedex-data'>
                <div className='about-pokedex-data-title-container'>
                    <h3 className='about-pokedex-data-title'>Abilities</h3>
                </div>
                <div className='about-pokedex-data-information-container'>
                    {
                        props.pokemonSelected.single.abilities &&
                            props.pokemonSelected.single.abilities.map((el:any, index:number)=>{
                                return <h4 
                                            key={index} 
                                            className='about-pokedex-data-information'
                                        >{el.ability.name}</h4>
                            })
                    }
                </div>
            </div>

        </div>




            

        </div>
    )
}

export default About;
