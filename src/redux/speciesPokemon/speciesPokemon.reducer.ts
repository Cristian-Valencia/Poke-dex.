import {FETCH_SPECIES_POKEMON} from './speciesPokemon.type';

const initialState ={
    species: {}
};

const speciesPokemonReducer = ( state = initialState, action:any ) => {

    switch( action.type ){

        case FETCH_SPECIES_POKEMON:
            return{
                species:action.payload 
            }
        
        default: return state 
    }

}

export default speciesPokemonReducer;