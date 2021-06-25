import { connect } from 'react-redux';
import { fetchGeneralSuccess } from '../../redux/generalPokemon/generalPokemon.action';
import Home from './Home.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonArray : state.arrayPokemonDetails
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        savePokemonArray: (detail:any) => dispatch(fetchGeneralSuccess(detail))
    }
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;