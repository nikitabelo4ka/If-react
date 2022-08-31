import React from 'react';
import Title from '../components/HomesGuestsLoves/Title.jsx';
import '../styles/AvailableHotels/AvailableHotels.css';
import Hotel from '../components/HomesGuestsLoves/Hotel.jsx';

function AvailableHotels(props) {
  return (
    <div className="available-hotels unactive">
      <div className="available-hotels-container col-m-12 col-s-12">
        <Title title="Available Hotels" />
        <div id="available-hotels" className="available-hotels-elements col-m-12 col-s-12">
          {props.foundHotels.map((hotel) => (
            <Hotel key={hotel.id} data={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableHotels;
