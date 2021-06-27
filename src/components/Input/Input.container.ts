import { connect } from 'react-redux';
import { fetchSingleSuccess } from '../../redux/arrayPokemonCardsDetail/arrayPokemonCardsDetail.action';
import Input from './Input.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonArray : state.generalPokemon,
        pokemonCard: state.arrayPokemonDetails
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        savePokemonSearched: (detail:any) => dispatch(fetchSingleSuccess(detail))
    }
}

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Input);
export default CardContainer;