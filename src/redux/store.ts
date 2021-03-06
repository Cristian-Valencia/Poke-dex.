import { createStore, applyMiddleware } from 'redux' ;
import thunk from 'redux-thunk' ;
import { combineReducers } from 'redux' ;
import pokemonGeneralReducer from './generalPokemon/generalPokemon.reducer' ;
import arrayPokemonCardsDetailReducer from './arrayPokemonCardsDetail/arrayPokemonCardsDetail.reducer';
import pokemonSelectedReducer from './pokemonSelected/pokemonSelected.reducer';
import speciesPokemonReducer from './speciesPokemon/speciesPokemon.reducer';
import pokemonEvolutionReducer from './pokemonEvolutionDetail/pokemonEvolutionDetail.reducer';
import pokemonCapturedReducer from './pokemonCaptured/pokemonCaptured.reducer';
import filterReducer from './pokemonFilter/pokemonFilter.reducer';

const rootReducer = combineReducers({
    generalPokemon : pokemonGeneralReducer,
    arrayPokemonDetails : arrayPokemonCardsDetailReducer,
    pokemonSelected : pokemonSelectedReducer,
    pokemonSpecies : speciesPokemonReducer,
    pokemonEvolution : pokemonEvolutionReducer,
    capturedPokemon : pokemonCapturedReducer,
    filterPokemon : filterReducer
})

const store = createStore( rootReducer, applyMiddleware(thunk) ) ;

export default store ;