import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'

export const TopBar = () => {
    return (
        <div className='topBar'>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >    
           <Grid xs={1}><Link to='/'>Inicio</Link> </Grid>
           <Grid xs={1}><Link to='/about-us'>Servicios</Link></Grid>
           <Grid xs={1}><Link to='/'>Equipo</Link></Grid>
           <Grid xs={1}><Link to='/'>Clientes</Link></Grid>
           <Grid xs={1}><Link to='/'>Contacto</Link></Grid>
           <Grid xs={1}><Link to='/'>Portafolio</Link></Grid>
           <Grid xs={1}><Link to='/'>Awards</Link></Grid>
           <Grid xs={1}><Link to='/'>News</Link></Grid>
          </Grid>
        </div>
      );
};
    
export default withRouter(TopBar);