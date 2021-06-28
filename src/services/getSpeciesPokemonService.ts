import axios from 'axios';


export const getSpecies = async (url:string) =>{

    const detailUrl= url;

    // console.log("detail ulr:", detailUrl)

    const res = await axios.get(detailUrl)

    return res.data;
    
}