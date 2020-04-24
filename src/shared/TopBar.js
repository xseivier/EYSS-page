import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import LogoEyss from '../assets/LOGO_EYSS.png'
import { Button } from '@material-ui/core'

export const TopBar = () => {
    return (
        <div className='topBar'>
          <div>
            <img src={LogoEyss} width='120px' alt='logo'/> 
          </div>
          <div style={{display: 'flex'}}>
           <Link className='link-topbar' to='/'>Inicio</Link> 
           <Link className='link-topbar' to='/'>Nosotros</Link>
           <Link className='link-topbar' to='/'>Servicios</Link>
           <Link className='link-topbar' to='/'>Equipo</Link>
           <Link className='link-topbar' to='/'>Clientes</Link>
           <Link className='link-topbar' to='/'>Contacto</Link>
           <Link className='link-topbar' to='/'>Portafolio</Link>
           <Link className='link-topbar' to='/'>Awards</Link>
           <Link className='link-topbar' to='/'>News</Link>
          </div>
          <div>
            <Button>Idioma</Button>
          </div>
        </div>
      );
};
    
export default withRouter(TopBar);