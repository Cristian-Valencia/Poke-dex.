import { FETCH_DETAIL_SUCCESS } from './arrayPokemonCardsDetail.type';

const initialState ={
    detail: []
};

const arrayPokemonCardsDetailReducer = ( state = initialState, action:any ) => {

    switch( action.type ){
        case FETCH_DETAIL_SUCCESS:
            return{
                detail:[ ...state.detail, action.payload ]
            }
        
        default: return state 
    }

}

export default arrayPokemonCardsDetailReducer;