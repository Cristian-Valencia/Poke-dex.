import React, { useEffect, useState } from 'react';
import './About.scss';
import { getSpecies } from 'services/getSpeciesPokemonService';

const About = (props:any) => {

    const [description, setDescription] = useState("");


    // useEffect(() => {

    //     typeof props.pokemonSelected.detail === 'object' &&
    //         getSpecies(props.pokemonSelected.detail.species.url)
    //             .then((response)=>{
    //                 console.log(response)
    //             })

    // }, [props])



    return (
        <div>
            <h1>Hi i'm AboutPage</h1>
        </div>
    )
}

export default About;
