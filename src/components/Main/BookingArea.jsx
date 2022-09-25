import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import IconsSVG from '../../assets/images/sprite.svg';
import FiltersWrap from './FiltersWrap.jsx';
import { API, PATH_SEARCH } from '../../constans/data';

function BookingArea({ updateData, changeFilterState, isFilterActive }) {
  const [destinationValue, setDestinationValue] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfAdults, setNumberOfAdults] = useState(1);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  function searchHotels(event) {
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
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                showDisabledMonthNavigation
                className="date-in col-s-12"
                id="date-in"
                name="date-in"
                autoComplete="off"
                placeholderText="Check-in"
                required
              />
            </div>
            <div className="date-out-wrap">
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                minDate={startDate}
                showDisabledMonthNavigation
                className="date-out col-s-12"
                id="date-out"
                name="date-in"
                autoComplete="off"
                placeholderText="Check-out"
                required
              />
            </div>
          </div>
          <input
            onClick={(event) => {
              event.stopPropagation();
              changeFilterState(true);
            }}
            className={
              isFilterActive ? 'people-room col-s-12 people-room-active' : 'people-room col-s-12'
            }
            autoComplete="off"
            id="people-room"
            name="people-room"
            type="text"
            required
            readOnly
            value={`${numberOfAdults} Adults — ${numberOfChildren} Children — ${numberOfRooms} Rooms`}
          />
          <button type="submit" value="Search" className="search col-s-12" id="search">
            Search
          </button>
        </div>
        <FiltersWrap
          isFilterActive={isFilterActive}
          changeFilterState={changeFilterState}
          updateLabelAdults={(value) => setNumberOfAdults(value)}
          updateLabelChildren={(value) => setNumberOfChildren(value)}
          updateLabelRooms={(value) => setNumberOfRooms(value)}
        />
      </form>
    </div>
  );
}

export default BookingArea;
