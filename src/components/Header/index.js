import React from 'react';
import './index.css';
import coforgeLogo from '../../images/Logo.png';

const Header = () =>{
    return(
       <div className='image-div'>
        <div className='logo'>
             <img src={coforgeLogo}/>
        </div>
       </div>
    )
}

export default Header;