import React from 'react';
import IconsSVG from '../../assets/images/sprite.svg';
import '../../assets/styles/SignIn/SingOutDropdown.css';

function SingOutDropdown({ changeSingOutState, isSingOutActive }) {
  return (
    <div
      onClick={(event) => {
        event.stopPropagation();
        localStorage.setItem('isSignIn', 'false');
        changeSingOutState(false);
      }}
      className={isSingOutActive ? 'sing-out-dropdown' : 'unactive'}
    >
      <div>
        <svg className="sing-out-icon">
          <use xlinkHref={`${IconsSVG}#singout`} />
        </svg>
        <p className="sing-out-text">Sing out</p>
      </div>
    </div>
  );
}

export default SingOutDropdown;
