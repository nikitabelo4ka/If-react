import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../containers/Footer.jsx';
import Header from './Main/Header.jsx';
import background from '../assets/images/background.png';
import '../assets/styles/Layout/Layout.css';

function Layout({ changeSingOutState, isSingOutActive }) {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="layout">
      <Header changeSingOutState={changeSingOutState} isSingOutActive={isSingOutActive} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
