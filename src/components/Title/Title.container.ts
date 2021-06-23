import { connect } from 'react-redux' ;
import Title from './Title.component' ;

const mapStateToProps = (state:any) =>{
    return{
        data:state.generalPokemon
    }
}

const TitleContainer = connect(mapStateToProps)(Title) ;
export default TitleContainer ;