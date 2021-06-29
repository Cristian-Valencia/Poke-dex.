import React, { useEffect, useState } from 'react';
import './Evolutions.scss';

const Evolutions = (props:any) => {

    console.log(props);

    const [evolutionData, setEvolutionData] = useState<any>();
    const [evolutionName, setEvolutionName] = useState("");
    const name = props.pokemonSelected.single.name;
    var urlImage = `https://pokeres.bastionbot.org/images/pokemon/${props.pokemonSelected.single.id}.png`;
    var evolutionImage = `https://pokeres.bastionbot.org/images/pokemon/${props.pokemonSelected.single.id + 1}.png`


    useEffect(() => {
        setEvolutionData(props.pokemonEvolution.evolution);
    }, [])

    useEffect(() => {

        if(evolutionData){
            if(evolutionData.chain.evolves_to[0].evolves_to.length === 1){
                if(name === evolutionData.chain.evolves_to[0].evolves_to[0].species.name){
                    setEvolutionName("There are no Evolutions")
                } else if(name === evolutionData.chain.evolves_to[0].species.name){
                    setEvolutionName(evolutionData.chain.evolves_to[0].evolves_to[0].species.name)
                } else{
                    setEvolutionName(evolutionData.chain.evolves_to[0].species.name)
                }
            } else if(evolutionData.chain.evolves_to[0].evolves_to.length === 0){
                if(name === evolutionData.chain.evolves_to[0].species.name){
                    setEvolutionName("There are no Evolutions")
                } else if(name === evolutionData.chain.species.name){
                    setEvolutionName(evolutionData.chain.evolves_to[0].species.name)
                }
            }

        }

    }, [evolutionData])

    return (
        <div className='evolutions'>
            {
                evolutionName !== "There are no Evolutions" ?
                <div className='evolutions-image-container'>
                    <div className='evolutions-pokemon-image-container'>
                        {
                            evolutionData &&
                                <img 
                                    src={urlImage} 
                                    alt="pokemon-image" 
                                    className='evolutions-pokemon-image' 
                                />
                        }
                    </div>
                    <div className='evolutions-pokemon-arrow-container'></div>
                    <div className='evolutions-evolution-image-container'>
                        {
                            evolutionData &&
                                <img 
                                    src={evolutionImage} 
                                    alt="pokemon-evolution-image" 
                                    className='evolutions-evolution-pokemon-image' 
                                />
                        }
                    </div>
                </div>

                :

                <div className='evolutions-error-container'>
                    <h2>The Pokémon doesn't have any Evolutions anymore</h2>
                </div>
            }
        </div>
    )
}

export default Evolutions;
