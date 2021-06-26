import axios from 'axios';

export const getGeneralPokemon = async () =>{
    const url=  `https://pokeapi.co/api/v2/pokemon?offset=0&limit=10`;
    const res = await axios.get(url);
    // console.log("res data: ",res.data)
    return res.data;
} ;