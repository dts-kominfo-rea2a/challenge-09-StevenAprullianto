// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';

const Header = ({title, subtitle}) => {
    return (
        <div style={{margin:'0 auto'}}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p style={{color:'#fd938f'}}>*************************************************************************************************************</p>
        </div>
    )
}

export default Header;