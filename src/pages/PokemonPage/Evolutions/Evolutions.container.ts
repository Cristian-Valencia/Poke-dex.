import { connect } from 'react-redux';
// import { fetchGeneralSuccess } from '../../redux/generalPokemon/generalPokemon.action';
import Evolutions from './Evolutions.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonEvolution : state.pokemonEvolution,
        pokemonSelected : state.pokemonSelected
    }
};

// const mapDispatchToProps = (dispatch:any) =>{
//     return{
//         savePokemonArray: (detail:any) => dispatch(fetchGeneralSuccess(detail))
//     }
// }

const evolutionsContainer = connect(mapStateToProps)(Evolutions);
export default evolutionsContainer;