import { FETCH_EVOLUTION_SUCCESS } from './pokemonEvolutionDetail.type';

export const fetchEvolutionSuccess = ( evolution : any ) => {
    return{
        type: FETCH_EVOLUTION_SUCCESS,
        payload : evolution
    }
}