import React from 'react'
import './Nav.css'
import HomeIcon from '@material-ui/icons/Home'
import ThumbsUpIcon from '@material-ui/icons/ThumbUpSharp'

function Nav({setSelectedOption}) {
    return (
    <center>
        <div className="navi">
            <div className="header__icons">
                    <div className="header__icon header__icon--active">
                        <HomeIcon/>
                        <p>Home</p>
                    </div>
            </div>
            <h2>Contest</h2>
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <ThumbsUpIcon/>
                    <p>Home</p>
                </div>
            </div>
            <h2>Products</h2>
            <h2>Support</h2>
        </div>
    </center>
    )
}

export default Nav
