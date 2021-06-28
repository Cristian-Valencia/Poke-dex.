import {FETCH_SINGLE_DETAIL} from './pokemonSelected.type';

const initialState ={
    selected: {}
};

const pokemonSelectedReducer = ( state = initialState, action:any ) => {

    switch( action.type ){

        case FETCH_SINGLE_DETAIL:
            return{
                detail:action.payload 
            }
        
        default: return state 
    }

}

export default pokemonSelectedReducer;