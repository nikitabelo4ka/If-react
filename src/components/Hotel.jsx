import React from 'react';
import '../styles/Hotel.css';

function Hotel(props) {
  return (
    <div className="homes-guests-loves-element col-m-6 col-3">
      <img className="hotel-icon" src={props.data.imageUrl} alt={`${props.data.name}`} />
      <a className="hotel-link" href="#">
        {props.data.name}
      </a>
      <p className="hotel-location">
        {props.data.city}, {props.data.country}
      </p>
    </div>
  );
}

export default Hotel;
