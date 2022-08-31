import React from 'react';
import '../../styles/Hotel.css';

function Hotel(props) {
  return (
    <div className="hotels-element col-m-6 col-3">
      <img className="hotels-icon" src={props.data.imageUrl} alt={`${props.data.name}`} />
      <a className="hotels-link" href="#">
        {props.data.name}
      </a>
      <p className="hotels-location">
        {props.data.city}, {props.data.country}
      </p>
    </div>
  );
}

export default Hotel;
