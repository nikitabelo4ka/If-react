import React from 'react';
import '../../assets/styles/HomesGuestsLoves/Arrow.css';
import IconsSVG from '../../assets/images/sprite.svg';

function Arrow() {
  return (
    <svg className="arrow">
      <use xlinkHref={`${IconsSVG}#arrow`} />
    </svg>
  );
}

export default Arrow;
