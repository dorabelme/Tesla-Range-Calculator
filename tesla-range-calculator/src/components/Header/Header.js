import React from 'react';
import './Header.css';
import logoUrl from '../../assets/logo.svg';

function Header() {
    return (
        <div className='header header-animation'>
            <img src={logoUrl} alt='Tesla'></img>
        </div>
    )
}

export default Header;
