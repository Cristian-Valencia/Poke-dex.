import { FETCH_DETAIL_SUCCESS } from './arrayPokemonCardsDetail.type' ;
import { FETCH_SINGLE_SUCCESS } from './arrayPokemonCardsDetail.type';

export const fetchDetailSuccess = ( general : any ) => {
    return{
        type: FETCH_DETAIL_SUCCESS,
        payload : general
    }
}

export const fetchSingleSuccess = ( singleDetail : any ) =>{
    return{
        type: FETCH_SINGLE_SUCCESS,
        payload: singleDetail
    }
}