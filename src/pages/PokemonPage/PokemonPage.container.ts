import { connect } from 'react-redux';
import { fetchSingleDetail } from 'redux/pokemonSelected/pokemonSelected.action';
import PokemonPage from './PokemonPage.component';
import { fetchCaptured } from 'redux/pokemonCaptured/pokemonCaptured.action';

const mapStateToProps = (state:any) =>{
    return{
        pokemonSelected : state.pokemonSelected,
        pokemonCaptured : state.capturedPokemon
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        savePokemonSingle: (detail:any) => dispatch(fetchSingleDetail(detail)),
        savePokemonCaptured: (captured:any) => dispatch(fetchCaptured(captured))
    }
}

const PokemonPageContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
export default PokemonPageContainer;