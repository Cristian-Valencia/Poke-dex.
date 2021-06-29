import {FETCH_SINGLE_DETAIL} from './pokemonSelected.type';

const initialState ={
    single: {}
};

const pokemonSelectedReducer = ( state = initialState, action:any ) => {

    switch( action.type ){

        case FETCH_SINGLE_DETAIL:
            return{
                single:action.payload 
            }
        
        default: return state 
    }

}

export default pokemonSelectedReducer;