import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Layout from './shared/Layout'
import Routes from './Routes'

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
