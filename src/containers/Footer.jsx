import React from 'react';
import ListItem from '../components/Footer/ListItem.jsx';
import IconsSVG from '../assets/images/sprite.svg';
import '../assets/styles/Footer/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container col-m-12 col-s-12">
        <svg className="footer-logo col-s-12">
          <use xlinkHref={`${IconsSVG}#footer-logo-mobile`} />
        </svg>
        <div className="lists">
          <ul className="list-about col-4 col-s-3">
            <ListItem name="About" />
            <ListItem name="How Triphouse works" />
            <ListItem name="Careers" />
            <ListItem name="Privacy" />
            <ListItem name="Terms" />
          </ul>
          <ul className="list-property_types col-3 col-s-6">
            <ListItem name="Property types" />
            <ListItem name="Guest houses" />
            <ListItem name="Hotels" />
            <ListItem name="Apartments" />
            <ListItem name="Villas" />
            <ListItem name="Holiday homes" />
            <ListItem name="Hostels" />
          </ul>
          <ul className="list-support col-5 col-s-3">
            <ListItem name="Support" />
            <ListItem name="Contact Customer Service" />
            <ListItem name="FAQ" />
          </ul>
        </div>
        <p className="signature col-s-12">&#169; 2020 Triphous, Inc. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
