import { FETCH_POKEMON_CAPTURED } from './pokemonCaptured.type';

export const fetchCaptured = ( captured : any ) => {
    return{
        type: FETCH_POKEMON_CAPTURED,
        payload : captured
    }
}