import React, { useState } from 'react';
import './Filter.scss';
import filtroImage from 'assets/images/filter.png';

const Filter = (props:any) => {

    const [filter, setfilter] = useState<boolean>(true);

    const handleOnClickFilter = () =>{
        setfilter(!filter);
    };

    const clickTutti = () =>{
        props.changeFilterStatus("Tutti");
    }

    const clickCatturati = () =>{
        props.changeFilterStatus("Catturati");
    }

    const clickNonCatturati = () =>{
        props.changeFilterStatus("NonCatturati");
    }
    
    return (
        <div className="filter">

            <div className="filter-image-container" onClick={handleOnClickFilter}>
                <img src={filtroImage} alt="filter-image" className='filter-image' />
            </div>

            <div className={!filter ? "filter-list-container-active" : "filter-list-container"}>
                <ul className="filter-list">
                    <li onClick={clickTutti}>Tutti</li>
                    <li onClick={clickCatturati}>Catturati</li>
                    <li onClick={clickNonCatturati}>Non Catturati</li>
                </ul>
            </div>
            
        </div>
    )
}

export default Filter;
