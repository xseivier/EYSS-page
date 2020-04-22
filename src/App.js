import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './shared/Layout'
import Home from './modules/home'
import AboutUs from './modules/about-us'

const Routes = () => (
<Switch>    
    <Route exact path="/" component={Home}/>
    <Route exact path='/about-us' component={AboutUs}/>
    <Redirect to="/"/>
</Switch>
)

function App() {
  return (
  <BrowserRouter>
    <Switch> 
      <Layout>
        <Routes />
      </Layout>   
    </Switch>
  </BrowserRouter>
  );
}

export default App;
