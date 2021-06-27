import axios from 'axios';

export const getPokemonSearched = async (name:string) =>{
    const detailUrl= `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await axios.get(detailUrl)
    return res.data;
}

  