import React from 'react';
import '../../assets/styles/Main/HeaderNavigation.css';

function HeaderNavigation() {
  return (
    <div className="right-header-content col-s-6">
      <div className="links">
        <a className="stays" href="">
          Stays
        </a>
        <a className="attractions" href="">
          Attractions
        </a>
      </div>
      <div className="right-header-content-icons">
        <a className="night-icon-link" href="">
          <svg
            className="night-icon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.3174 11.3174V4.68258H20.6826L16 0L11.3174 4.68258H4.68258V11.3174L0 16L4.68258 20.6826V27.3174H11.3174L16 32L20.6826 27.3174H27.3174V20.6826L32 16L27.3174 11.3174ZM16 24.4881C14.7409 24.4881 13.5385 24.2051 12.4633 23.71C15.3775 22.366 17.4147 19.4235 17.4147 16C17.4147 12.5765 15.3775 9.63395 12.4633 8.29001C13.5385 7.79487 14.7409 7.51194 16 7.51194C20.6826 7.51194 24.4881 11.3174 24.4881 16C24.4881 20.6826 20.6826 24.4881 16 24.4881Z" />
          </svg>
        </a>
        <a className="account-icon-link" href="">
          <svg
            className="account-icon"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z" />
          </svg>
        </a>
        <a className="menu-icon-link" href="">
          <svg
            className="menu-icon"
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default HeaderNavigation;
