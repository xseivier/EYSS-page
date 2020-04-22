import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TopBar from './TopBar'

const Layout = ({ children }) => {
  return (
    <div className='LayoutContainer'>
      <TopBar />
      <div className='layoutContent'>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default  withRouter(Layout) ;