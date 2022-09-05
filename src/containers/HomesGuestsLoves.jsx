import React, { useEffect, useState } from 'react';
import Hotel from '../components/HomesGuestsLoves/Hotel.jsx';
import Arrow from '../components/HomesGuestsLoves/Arrow.jsx';
import Title from '../components/HomesGuestsLoves/Title.jsx';
import '../assets/styles/HomesGuestsLoves/HomesGuestsLoves.css';
import { API, PATH } from '../constans/data';

function HomesGuestsLoves() {
  const [fetchResult, setFetchResult] = useState([]);

  useEffect(() => {
    fetch(`${API}/${PATH}`)
      .then((response) => response.json())
      .then((result) => setFetchResult(result));
  }, []);

  return (
    <div className="homes-guests-loves">
      <div className="homes-guests-loves-container col-m-12 col-s-12">
        <Title title="Homes Guests Loves" />
        <div id="homes-guests-loves" className="homes-guests-loves-elements col-m-12 col-s-12">
          <Arrow />
          {fetchResult.map((hotel) => (
            <Hotel key={hotel.id} data={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomesGuestsLoves;
