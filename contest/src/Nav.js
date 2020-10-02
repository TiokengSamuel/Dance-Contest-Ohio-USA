import React from 'react'
import './Nav.css'

function Nav({setSelectedOption}) {
    return (
    <center>
        <div className="navi">
        <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
            <h2>Contest</h2>
            <h2>Vote</h2>
            <h2>Products</h2>
            <h2>Support</h2>
        </div>
    </center>
    )
}

export default Nav
