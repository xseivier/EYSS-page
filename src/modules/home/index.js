import React from 'react'
import { Button } from '@material-ui/core';
import './index.css'
// import {Sombras13} from '../../assets/sombras-13.png'
// import {Sombras14} from '../../assets/sombras-14.png'
export default function Home() {
    return (
        <div className='home-1'>
            <h2>
            Estamos listos para impulsar tu negocio!
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Button variant="contained" color="primary">Nuestros servicios</Button>
        </div>
    )
}
