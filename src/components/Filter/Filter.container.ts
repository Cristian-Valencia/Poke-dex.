import { connect } from 'react-redux';
import Filter from './Filter.component';
import {filterStatus} from 'redux/pokemonFilter/pokemonFilter.action';


const mapStateToProps = (state:any) =>{
    return{
        pokemonArray : state.generalPokemon,
        pokemonCard: state.arrayPokemonDetails,
        statusFilter : state.filterPokemon
    }
};

const mapDispatchToProps = (dispatch:any) =>{
    return{
        changeFilterStatus: (status:any) => dispatch(filterStatus(status))
    }
}

const filterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
export default filterContainer;