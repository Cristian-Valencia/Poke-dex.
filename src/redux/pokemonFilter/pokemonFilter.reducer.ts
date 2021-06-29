import { POKEMON_FILTER_STATUS } from './pokemonFilter.type';

const initialState ={
    status: "Tutti"
};

const filterReducer = ( state = initialState, action:any ) => {

    switch( action.type ){

        case POKEMON_FILTER_STATUS:
            return{
                status:action.payload 
            }
        
        default: return state 
    }

}

export default filterReducer;