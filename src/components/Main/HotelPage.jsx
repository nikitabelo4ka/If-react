import React, { useEffect, useState } from 'react';
import '../../assets/styles/HotelPage/HotelPage.css';
import { useParams } from 'react-router-dom';
import background from '../../assets/images/background.png';
import Header from './Header.jsx';
import HotelPageContent from '../HotelPage/HotelPageContent.jsx';

function HotelPage() {
  const params = useParams();
  const hotelId = params.id;

  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${hotelId}`)
      .then((response) => response.json())
      .then((result) => {
        setHotelInfo(result);
      });
  }, [hotelId]);

  return (
    <div>
      <div className="hotel-page-header" style={{ backgroundImage: `url(${background})` }}>
        <Header />
      </div>
      <HotelPageContent data={hotelInfo} />
    </div>
  );
}

export default HotelPage;
