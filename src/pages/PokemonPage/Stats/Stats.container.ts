import { connect } from 'react-redux';
// import { fetchGeneralSuccess } from '../../redux/generalPokemon/generalPokemon.action';
import Stats from './Stats.component';

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

const statsContainer = connect(mapStateToProps)(Stats);
export default statsContainer;