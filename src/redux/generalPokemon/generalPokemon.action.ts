import { FETCH_GENERAL_SUCCESS } from './generalPokemon.type' ;
import { FETCH_RESET_SUCCESS } from './generalPokemon.type';

export const fetchGeneralSuccess = ( general : any ) => {
    return{
        type: FETCH_GENERAL_SUCCESS,
        payload : general
    }
}

export const fetchGeneralReset = ( general: any ) =>{
    return{
        type: FETCH_RESET_SUCCESS,
        payload: general
    }
} 