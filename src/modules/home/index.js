import React, {Fragment} from 'react'
import { Button } from '@material-ui/core';
import './index.css'
import Sombras13 from '../../assets/sombras-13.png'
import Sombras14 from '../../assets/sombras-14.png'
import HomeImage from '../../assets/home-image.png'
export default function Home() {
    return (
      <Fragment>
        <img src={Sombras13} alt='sombra' className='imageHomeTop'></img>
        <img src={Sombras14} alt='sombra' className='imageHomeBottom'></img>
        <div className='home-1'>
          <div className='info-1'>
            <h2 className='title-home-1'>
            ¡Estamos listos para impulsar tu negocio!
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim venia, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat.
            </p>
            <Button variant="contained" style={{background: "#4885ed", color: '#fff'}}>Nuestros servicios</Button>
          </div>
          <img src={HomeImage} width='700px' height='100%' alt='homeImage'/>
        </div>
      </Fragment>
    )
}
