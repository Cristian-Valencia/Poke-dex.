import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';


const Header = () => {

    const [clicked, setClicked] = useState(false);

    const hamburgerMenuToggle = () =>{
        setClicked(!clicked);
    }

    const clearCaptured = () => {
        localStorage.clear();
    }

    return (
        <div className='header'>

            <Link to="/" className="header-title-container">
                <h1 className='header-title'>Pokédex</h1>
            </Link>

            <div className='header-hamburger-menu-container' onClick={hamburgerMenuToggle}>
                <div className={!clicked ? "header-hamburger-one" : "header-hamburger-one-x"}></div>
                <div className={!clicked ? "header-hamburger-two" : "header-hamburger-two-x"}></div>
                <div className={!clicked ? "header-hamburger-three" : "header-hamburger-three-x"}></div>
            </div>

            <div className={!clicked ? "header-dropdown-menu-container" : "header-dropdownmenu-container-active"}>

                <div className="header-dropdown-content">
                    
                    <Link to="/">
                        <h2>HomePage</h2>
                    </Link>

                    <h2 onClick={clearCaptured}>Clear Captured</h2>
                    
                    <h2>Captured</h2>
                </div>

            </div>
            
        </div>
    )
}

export default Header;
