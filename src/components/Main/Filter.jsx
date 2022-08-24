import React from 'react';
import '../../styles/Main/Filter.css';

function Filter(props) {
  const label = props.for[0].toUpperCase() + props.for.slice(1);
  return (
    <div className="filter-wrap fil-el">
      <label htmlFor={props.for} className="filter-label fil-el">
        {label}
      </label>
      <div className="filter-counter fil-el">
        <div id={`${props.for}-less`} className="filter-button fil-el button-unactive">
          -
        </div>
        <input
          id={props.for}
          className="filter-input fil-el"
          defaultValue={props.value}
          data-min={props.min}
          data-max={props.max}
          autoComplete="off"
        />
        <div id={`${props.for}-more`} className="filter-button fil-el">
          +
        </div>
      </div>
    </div>
  );
}

export default Filter;
