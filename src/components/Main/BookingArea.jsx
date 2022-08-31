import React, { useState } from 'react';
import IconsSVG from '../../images/sprite.svg';
import FiltersWrap from './FiltersWrap.jsx';
import data from '../../constans/data';

let hotelsExist = false;

function BookingArea(props) {
  const [destinationValue, setDestinationValue] = useState('');
  const [dateInType, setDateInType] = useState('text');
  const [dateOutType, setDateOutType] = useState('text');

  function makeStartState(hotelsExist) {
    if (hotelsExist) {
      const availableHotelsWrap = document.getElementsByClassName('available-hotels')[0];
      const oldAvailableHotels = document.getElementById('available-hotels');
      oldAvailableHotels.parentNode.removeChild(oldAvailableHotels);
      const newAvailableHotels = document.createElement('div');
      newAvailableHotels.className = 'available-hotels-elements col-m-12 col-s-12';
      newAvailableHotels.id = 'available-hotels';
      availableHotelsWrap.appendChild(newAvailableHotels);
    }
    return false;
  }

  function search(str) {
    return data.filter((object) => [object.country.toLowerCase(), object.city.toLowerCase(), object.name.toLowerCase()].includes(str.toLowerCase()));
  }

  function searchHotels(event) {
    event.preventDefault();
    const searchResult = search(destinationValue);
    const availableHotelsWrap = document.getElementsByClassName('available-hotels')[0];
    if (searchResult.length === 0) {
      availableHotelsWrap.classList.add('unactive');
      hotelsExist = makeStartState(hotelsExist);
      alert('Nothing was found for your query');

      return;
    }
    availableHotelsWrap.classList.remove('unactive');

    hotelsExist = makeStartState(hotelsExist);

    props.updateData(searchResult);
  }

  return (
    <div className="booking-area col-m-11 col-s-11">
      <form
        id="inputs"
        className="inputs"
        action="#"
        method="get"
        onSubmit={(event) => searchHotels(event)}
      >
        <div className="row-form">
          <a href="" className="search-link">
            <svg className="search-icon">
              <use xlinkHref={`${IconsSVG}#search"`} />
            </svg>
          </a>
          <div className="destination-wrap">
            <input
              value={destinationValue}
              onChange={(event) => setDestinationValue(event.target.value)}
              className="destination col-s-12"
              id="destination"
              autoComplete="off"
              name="destination"
              type="text"
              required
            />
            <label className="destination-label" htmlFor="destination">
              Your destination or hotel name
            </label>
          </div>
          <div className="date-in-out-wrap">
            <div className="date-in-wrap">
              <input
                onFocus={() => setDateInType('date')}
                onBlur={() => setDateInType('text')}
                className="date-in col-s-12"
                type={dateInType}
                name="date-in"
                id="date-in"
                required
              />
              <label className="date-in-label col-m-10 col-s-11" htmlFor="date-in">
                Check-in
              </label>
            </div>
            <div className="date-out-wrap">
              <input
                onFocus={() => setDateOutType('date')}
                onBlur={() => setDateOutType('text')}
                className="date-out col-s-12"
                id="date-out"
                name="date-out"
                type={dateOutType}
                required
              />
              <label className="date-out-label col-m-9 col-s-11" htmlFor="date-out">
                Check-out
              </label>
            </div>
          </div>
          <input
            className="people-room col-s-12"
            autoComplete="off"
            id="people-room"
            name="people-room"
            type="text"
            required
            defaultValue="1 Adults &#8212; 0 Children &#8212; 1 Rooms"
          />
          <button type="submit" value="Search" className="search col-s-12" id="search">
            Search
          </button>
        </div>
        <FiltersWrap />
      </form>
    </div>
  );
}

export default BookingArea;
