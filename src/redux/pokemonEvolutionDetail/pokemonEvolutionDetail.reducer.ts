import {FETCH_EVOLUTION_SUCCESS} from './pokemonEvolutionDetail.type';

const initialState ={
    evolution: {}
};

const pokemonEvolutionReducer = ( state = initialState, action:any ) => {

    switch( action.type ){

        case FETCH_EVOLUTION_SUCCESS:
            return{
                evolution:action.payload 
            }
        
        default: return state 
    }

}

export default pokemonEvolutionReducer;