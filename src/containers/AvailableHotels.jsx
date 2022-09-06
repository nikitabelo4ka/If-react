import React from 'react';
import Title from '../components/HomesGuestsLoves/Title.jsx';
import '../assets/styles/AvailableHotels/AvailableHotels.css';
import Hotel from '../components/HomesGuestsLoves/Hotel.jsx';

function AvailableHotels({ foundHotels }) {
  return (
    <div className={foundHotels.length === 0 ? 'available-hotels unactive' : 'available-hotels'}>
      <div className="available-hotels-container col-m-12 col-s-12">
        <Title title="Available Hotels" />
        <div id="available-hotels" className="available-hotels-elements col-m-12 col-s-12">
          {foundHotels.map((hotel) => (
            <Hotel key={hotel.id} data={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableHotels;
