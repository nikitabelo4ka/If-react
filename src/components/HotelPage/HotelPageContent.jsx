import React from 'react';

function HotelPageContent({ data }) {
  return (
    <div className="hotel-page-element col-m-6 col-3">
      <img className="hotel-page-icon" src={data.imageUrl} alt={`${data.name}`} />
      <p className="hotel-page-link">{data.name}</p>
      <p className="hotel-page-location">
        {data.city}, {data.country}
      </p>
    </div>
  );
}

export default HotelPageContent;
