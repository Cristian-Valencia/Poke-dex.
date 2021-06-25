import { FETCH_DETAIL_SUCCESS } from './arrayPokemonCardsDetail.type' ;

export const fetchDetailSuccess = ( general : any ) => {
    return{
        type: FETCH_DETAIL_SUCCESS,
        payload : general
    }
}