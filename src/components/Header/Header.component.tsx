import React from 'react';
import './Header.scss';


const Header = () => {

    return (
        <div className='header'>

            <div className="header-title-container">
                <h1 className='header-title'>Pokédex</h1>
            </div>

            <div className='header-hamburger-menu-container'>
                <div className='header-hamburger-one'></div>
                <div className='header-hamburger-two'></div>
                <div className='header-hamburger-three'></div>
            </div>
            
        </div>
    )
}

export default Header;
