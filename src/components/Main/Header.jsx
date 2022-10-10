import React from 'react';
import HeaderNavigation from './HeaderNavigation.jsx';
import '../../assets/styles/Main/Header.css';
import IconsSVG from '../../assets/images/sprite.svg';

function Header({ changeSingOutState, isSingOutActive }) {
  return (
    <div className="header col-m-10 col-s-12">
      <div className="logo col-2 col-s-5">
        <a href="/">
          <svg className="logo-icon">
            <use xlinkHref={`${IconsSVG}#logo_vector`} />
          </svg>
        </a>
      </div>
      <HeaderNavigation changeSingOutState={changeSingOutState} isSingOutActive={isSingOutActive} />
    </div>
  );
}

export default Header;
