import React from 'react';
import '../../assets/styles/Hotel.css';

function Hotel({ data }) {
  return (
    <div className="hotels-element col-m-6 col-3">
      <img className="hotels-icon" src={data.imageUrl} alt={`${data.name}`} />
      <p className="hotels-link">{data.name}</p>
      <p className="hotels-location">
        {data.city}, {data.country}
      </p>
    </div>
  );
}

export default Hotel;
