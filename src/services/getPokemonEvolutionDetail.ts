import axios from 'axios';


export const getEvolutionsPokemon = async (url:string) =>{
    const detailUrl= url;
    const res = await axios.get(detailUrl)
    return res.data;
}