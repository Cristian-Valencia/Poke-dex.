import { FETCH_POKEMON_CAPTURED } from './pokemonCaptured.type';

const initialState = {
    captured: []
}

const pokemonCapturedReducer = ( state = initialState, action:any ) =>{

    switch( action.type ){
        case FETCH_POKEMON_CAPTURED:
            return{
                captured:[ ...state.captured, action.payload ]
            }

        default: return state 
    }
}

export default pokemonCapturedReducer ;