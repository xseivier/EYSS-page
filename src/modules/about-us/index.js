import React from 'react'
import './about.css'

export default function AboutUs() {
    return (
        <div className='about'>
            <h3 className='about-title'>Acerca de nosotros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim venia, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
            </p>
            <div className='cards-container'>
                <div className='card'>
                    <div className='card-header'>
                        <h4>Integracion</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className='card c-2'>
                    <div className='card-header'>
                        <h4>Dedicacion</h4>
                        <p>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
                <div className='card c-3'>
                    <div className='card-header'>
                        <h4>Financiamiento</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
