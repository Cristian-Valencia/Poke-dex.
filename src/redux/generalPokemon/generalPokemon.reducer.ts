import { FETCH_GENERAL_SUCCESS } from './generalPokemon.type' ;
import { FETCH_RESET_SUCCESS } from './generalPokemon.type';

const initialState = {
    general: []
}

const pokemonGeneralReducer = ( state = initialState, action:any ) =>{

    switch( action.type ){
        case FETCH_GENERAL_SUCCESS:
            return{
                general: action.payload
            }
        case FETCH_RESET_SUCCESS:
            return{
                general:[]
            }
        
        default: return state 
    }
}

export default pokemonGeneralReducer ;