import { FETCH_DETAIL_SUCCESS, FETCH_RESET_SUCCESS } from './arrayPokemonCardsDetail.type';
import { FETCH_SINGLE_SUCCESS } from './arrayPokemonCardsDetail.type';

const initialState ={
    detail: []
};

const arrayPokemonCardsDetailReducer = ( state = initialState, action:any ) => {

    switch( action.type ){
        case FETCH_DETAIL_SUCCESS:
            return{
                detail:[ ...state.detail, action.payload ]
            }
        case FETCH_SINGLE_SUCCESS:
            return{
                detail:[ action.payload ]
            }
        
        case FETCH_RESET_SUCCESS:
            return{
                detail:[]
            }
        
        default: return state 
    }

}

export default arrayPokemonCardsDetailReducer;