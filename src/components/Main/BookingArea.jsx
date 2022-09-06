import React, { useState, useCallback } from 'react';
import IconsSVG from '../../assets/images/sprite.svg';
import FiltersWrap from './FiltersWrap.jsx';
import { API, PATH_SEARCH } from '../../constans/data';

function BookingArea({ updateData }) {
  const [destinationValue, setDestinationValue] = useState('');
  const [dateInType, setDateInType] = useState('text');
  const [dateOutType, setDateOutType] = useState('text');

  const searchHotels = useCallback(
    (event) => {
      event.preventDefault();
      fetch(`${API}/${PATH_SEARCH}=${destinationValue}`)
        .then((response) => response.json())
        .then((result) => {
          if (result.length === 0) {
            alert('Nothing was found for your query');
            updateData(result);

            return;
          }
          updateData(result);
        });
    },
    [destinationValue]
  );

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
