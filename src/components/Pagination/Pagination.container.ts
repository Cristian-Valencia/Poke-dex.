import { connect } from 'react-redux';
import { fetchGeneralSuccess } from 'redux/generalPokemon/generalPokemon.action';
import { fetchResetSuccess } from 'redux/arrayPokemonCardsDetail/arrayPokemonCardsDetail.action';
import Pagination from './Pagination.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonArray : state.generalPokemon,
        pokemonCard: state.arrayPokemonDetails
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        resetPokemon: () => dispatch(fetchResetSuccess()),
        pokemonInfo: (detail:any) => dispatch(fetchGeneralSuccess(detail))
    }
}

const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export default PaginationContainer;