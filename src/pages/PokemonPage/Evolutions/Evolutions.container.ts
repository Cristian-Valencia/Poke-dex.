import { connect } from 'react-redux';
// import { fetchGeneralSuccess } from '../../redux/generalPokemon/generalPokemon.action';
import Evolutions from './Evolutions.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonArray : state.arrayPokemonDetails
    }
};

// const mapDispatchToProps = (dispatch:any) =>{
//     return{
//         savePokemonArray: (detail:any) => dispatch(fetchGeneralSuccess(detail))
//     }
// }

const evolutionsContainer = connect(mapStateToProps)(Evolutions);
export default evolutionsContainer;