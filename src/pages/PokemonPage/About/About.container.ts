import { connect } from 'react-redux';
// import { fetchGeneralSuccess } from '../../redux/generalPokemon/generalPokemon.action';
import About from './About.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonSelected : state.pokemonSelected,
        pokemonSpecies : state.pokemonSpecies
    }
};

// const mapDispatchToProps = (dispatch:any) =>{
//     return{
//         savePokemonArray: (detail:any) => dispatch(fetchGeneralSuccess(detail))
//     }
// }

const aboutContainer = connect(mapStateToProps)(About);
export default aboutContainer;