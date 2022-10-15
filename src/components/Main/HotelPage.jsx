import React, { useEffect, useState } from 'react';
import '../../assets/styles/HotelPage/HotelPage.css';
import { useParams } from 'react-router-dom';

function HotelPage() {
  const params = useParams();
  const hotelId = params.id;

  const [hotelInfo, setHotelInfo] = useState({});

  const isSignIn = localStorage.getItem('isSignIn');

  if (!isSignIn || isSignIn === 'false') {
    window.location.replace('/sign_in');
  }

  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${hotelId}`)
      .then((response) => response.json())
      .then((result) => {
        setHotelInfo(result);
      });
  }, [hotelId]);

  return (
    <div className="hotel-page-element col-m-6 col-3">
      <img className="hotel-page-icon" src={hotelInfo.imageUrl} alt={`${hotelInfo.name}`} />
      <p className="hotel-page-link">{hotelInfo.name}</p>
      <p className="hotel-page-location">
        {hotelInfo.city}, {hotelInfo.country}
      </p>
    </div>
  );
}

export default HotelPage;
