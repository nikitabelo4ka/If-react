import React, { useEffect, useState } from 'react';
import '../../assets/styles/Main/Filter.css';

function Filter({ id, value, min, max, updateLabel, updateData }) {
  const [inputValue, setInputValue] = useState(Number(value));
  const label = id[0].toUpperCase() + id.slice(1);

  function increase() {
    if (inputValue < Number(max)) {
      setInputValue(inputValue + 1);
    }
  }

  function decrease() {
    if (inputValue > Number(min)) {
      setInputValue(inputValue - 1);
    }
  }

  useEffect(() => {
    if (id === 'children') {
      updateData(inputValue);
    }
    updateLabel(inputValue);
  }, [id, updateLabel, updateData, inputValue]);

  function handleChangeInput(event) {
    if (Number.isNaN(Number(event.target.value))) {
      setInputValue(Number(min));
    } else {
      setInputValue(Number(event.target.value));
    }
  }

  function handleBlurInput(event) {
    if (event.target.value <= Number(min)) {
      setInputValue(Number(min));
    }
    if (event.target.value >= Number(max)) {
      setInputValue(Number(max));
    }
  }

  return (
    <div className="filter-wrap">
      <label htmlFor={id} className="filter-label">
        {label}
      </label>
      <div className="filter-counter">
        <div
          id={`${id}-less`}
          onClick={decrease}
          className={inputValue <= Number(min) ? 'filter-button button-unactive' : 'filter-button'}
        >
          -
        </div>
        <input
          id={id}
          value={inputValue}
          className="filter-input"
          onChange={(event) => handleChangeInput(event)}
          onBlur={(event) => handleBlurInput(event)}
          data-min={min}
          data-max={max}
          autoComplete="off"
        />
        <div
          id={`${id}-more`}
          onClick={increase}
          className={inputValue === Number(max) ? 'filter-button button-unactive' : 'filter-button'}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default Filter;
