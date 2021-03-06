import React from 'react';
import ReactPaginate from 'react-paginate';
import leftArrow from '../../assets/images/leftArrow.svg';
import rightArrow from '../../assets/images/rightArrow.svg';
import './Pagination.scss';
import { getGeneralPokemon } from 'services/generalPokemonService';

const Pagination = (props:any) => {

    const handleOnChange = (data:any) => {

        props.resetPokemon();
        
        const numberSelected = data.selected * 10 ;

        getGeneralPokemon(numberSelected)

            .then((response:any)=>{
                props.pokemonInfo(response.results);
            })

    }


    const left = <img src={leftArrow} alt="arrowToLeft" className="pagination-left-arrow" />;
    const right = <img src={rightArrow} alt="arrowToRight" className="pagination-right-arrow" />;

    return (
        <div className="pagination">

            <ReactPaginate
                previousLabel= {left}
                nextLabel={right}
                breakLabel={'...'}
                breakClassName="pagination-break-class"
                // initialPage={0}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handleOnChange}
                containerClassName="pagination-container"
                pageClassName="pagination-pages"
                previousClassName="paginatione-previous-button"
                nextClassName="pagination-next-button"
                // subContainerClassName="pagination-sub-container"
                activeClassName="pagination-activated"
            />
            
        </div>
    )
}

export default Pagination;
