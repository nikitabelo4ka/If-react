import React from 'react';
import '../../assets/styles/Hotel.css';

function Hotel({ data }) {
  return (
    <div className="hotels-element col-m-6 col-3">
      <img className="hotels-icon" src={data.imageUrl} alt={`${data.name}`} />
      <a className="hotels-link" href="#">
        {data.name}
      </a>
      <p className="hotels-location">
        {data.city}, {data.country}
      </p>
    </div>
  );
}

export default Hotel;
