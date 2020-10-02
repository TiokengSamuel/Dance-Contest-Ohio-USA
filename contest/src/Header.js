import React from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
// import HomeIcon from '@material-ui/icons/Home'
// import FlashOnIcon from '@material-ui/icons/FlashOn'
// import LiveTvIcon from '@material-ui/icons/LiveTv'
// import SearchIcon from '@material-ui/icons/Search'
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
// import PersonOutlineIcon from '@material-ui/icons/PersonOutline'


function Header() {
    return (
        <div className="header">
            <h1><b>CONTEST OHIO</b></h1>
            {/* <div className="header__icons">
                <div className="header__icon header__icon--active">
                    <HomeIcon/>
                    <p>Home</p>
                </div>
                <div className="header__icon">
                    <FlashOnIcon/>
                    <p>Trending</p>
                </div>
                <div className="header__icon">
                    <LiveTvIcon/>
                    <p>Live Tv</p>
                </div>
                <div className="header__icon">
                    <VideoLibraryIcon/>
                    <p>Collections</p>
                </div>
                <div className="header__icon">
                    <SearchIcon/>
                    <p>Search</p>
                </div>
                <div className="header__icon">
                    <PersonOutlineIcon/>
                    <p>Account</p> 
                </div>
                
            </div>*/}
            <Button className="btn-sign" color= "primary" variant="outline-light">Login</Button>
            
            <Button className="btn-sign" variant="outline-light">Sign up</Button>
        </div>
    )
}

export default Header
