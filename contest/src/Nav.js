import React from 'react'
import './Nav.css'
import HomeIcon from '@material-ui/icons/Home'
import ThumbsUpIcon from '@material-ui/icons/ThumbUpSharp'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

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
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <ShoppingBasketIcon/>
                    <p>Contestants</p>
                </div>
            </div>
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <ThumbsUpIcon/>
                    <p>Vote</p>
                </div>
            </div>
            <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <ShoppingBasketIcon/>
                    <p>Products</p>
                </div>
            </div>
            <h2>Support</h2>
        </div>
    </center>
    )
}

export default Nav
