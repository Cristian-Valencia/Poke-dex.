import { FETCH_GENERAL_SUCCESS } from './generalPokemon.type' ;

const initialState = {
    general: []
}

const pokemonGeneralReducer = ( state = initialState, action:any ) =>{

    switch( action.type ){
        case FETCH_GENERAL_SUCCESS:
            return{
                general: action.payload
            }
        
        default: return state 
    }
}

export default pokemonGeneralReducer ;