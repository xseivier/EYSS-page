import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from './modules/home'
import AboutUs from './modules/about-us'

const Routes = () => (
    <Switch>    
        <Route exact path="/" component={Home}/>
        <Route exact path='/about-us' component={AboutUs}/>
        <Redirect to="/"/>
    </Switch>
    )

export default Routes