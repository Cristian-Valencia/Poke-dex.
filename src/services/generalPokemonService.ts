import axios from 'axios';

export const getGeneralPokemon = async (numberPage:number) =>{
    const url=  `https://pokeapi.co/api/v2/pokemon?offset=${numberPage}&limit=10`;
    const res = await axios.get(url);
    // console.log("res data: ",res.data)
    return res.data;
} ;