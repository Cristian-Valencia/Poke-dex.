import { POKEMON_FILTER_STATUS } from './pokemonFilter.type';

export const filterStatus = ( status : any ) => {
    return{
        type: POKEMON_FILTER_STATUS,
        payload : status
    }
}