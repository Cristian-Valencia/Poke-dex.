import { createStore, applyMiddleware } from 'redux' ;
import thunk from 'redux-thunk' ;
import { combineReducers } from 'redux' ;
import pokemonGeneralReducer from './generalPokemon/generalPokemon.reducer' ;

const rootReducer = combineReducers({
    generalPokemon : pokemonGeneralReducer
})

const store = createStore( rootReducer, applyMiddleware(thunk) ) ;

export default store ;