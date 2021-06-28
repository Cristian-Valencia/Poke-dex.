import { connect } from 'react-redux';
import { fetchSingleDetail } from 'redux/pokemonSelected/pokemonSelected.action';
import PokemonPage from './PokemonPage.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonSelected : state.pokemonSelected
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        savePokemonSingle: (detail:any) => dispatch(fetchSingleDetail(detail))
    }
}

const PokemonPageContainer = connect(mapStateToProps, mapDispatchToProps)(PokemonPage);
export default PokemonPageContainer;