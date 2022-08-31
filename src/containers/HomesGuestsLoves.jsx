import React from 'react';
import Hotel from '../components/HomesGuestsLoves/Hotel.jsx';
import Arrow from '../components/HomesGuestsLoves/Arrow.jsx';
import data from '../constans/data';
import Title from '../components/HomesGuestsLoves/Title.jsx';
import '../styles/HomesGuestsLoves/HomesGuestsLoves.css';

function HomesGuestsLoves() {
  return (
    <div className="homes-guests-loves">
      <div className="homes-guests-loves-container col-m-12 col-s-12">
        <Title title="Homes Guests Loves" />
        <div id="homes-guests-loves" className="homes-guests-loves-elements col-m-12 col-s-12">
          <Arrow />
          {data.map((hotel) => (
            <Hotel key={hotel.id} data={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomesGuestsLoves;
