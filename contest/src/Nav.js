import React from 'react'
import './Nav.css'

function Nav({setSelectedOption}) {
    return (
    <center>
        <div className="navi">
            <h2>Home</h2>
            <h2>Dance</h2>
            <h2>Rap</h2>
            <h2>Music</h2>
            <h2>Fav Contestant</h2>
            <h2>Vote</h2>
            <h2>Products</h2>
            <h2>Support</h2>
        </div>
    </center>
    )
}

export default Nav
