import {FETCH_SINGLE_DETAIL} from './pokemonSelected.type';

export const fetchSingleDetail = ( single : any ) => {
    return{
        type: FETCH_SINGLE_DETAIL,
        payload : single
    }
}