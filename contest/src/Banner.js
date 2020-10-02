import React from 'react'
import './Banner.css'
import {Button} from 'react-bootstrap'

function Banner() {
    return (
        <div className="banner">
            <section className="slider text-center">
                <div className="slider-overlay">
                    <div className="slider-content">
                        
                        <div className="text">Empowering Kids All Over the World</div>
                        <div className="cta-div">
                            <Button><span color="#042727" className="con-text">Contact Us</span></Button> 
                        </div>
                        

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner
