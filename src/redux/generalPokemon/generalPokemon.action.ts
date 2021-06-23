import { FETCH_GENERAL_SUCCESS } from './generalPokemon.type' ;

export const fetchGeneralSuccess = ( general : any ) => {
    return{
        type: FETCH_GENERAL_SUCCESS,
        payload : general
    }
}