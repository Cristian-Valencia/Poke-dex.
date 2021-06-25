import { connect } from 'react-redux';
import { fetchDetailSuccess } from '../../redux/arrayPokemonCardsDetail/arrayPokemonCardsDetail.action';
import Card from './Card.component';

const mapStateToProps = (state:any) =>{
    return{
        pokemonArray : state.generalPokemon,
        pokemonCard: state.arrayPokemonDetails
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        savePokemonArray: (detail:any) => dispatch(fetchDetailSuccess(detail))
    }
}

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);
export default CardContainer;